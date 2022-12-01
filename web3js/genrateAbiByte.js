const solc = require('solc');
const fs = require('fs');
const Web3 = require('web3');

const web3 = new Web3("HTTP://127.0.0.1:7545");

let fileCOntent = fs.readFileSync("demo.sol").toString();

var input = {
    language: 'Solidity',
    sources: {
        'demo.sol': {
            content: fileCOntent,
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
const ABI = output.contracts['demo.sol']['demo'].abi;
const byteCode = output.contracts['demo.sol']['demo'].evm.bytecode.object;


// deployment
const contract = new web3.eth.Contract(ABI);

web3.eth.getAccounts()
    .then((accounts) => {
        console.log('accounts', accounts);
        let acc = accounts[0];
        contract.deploy({ data: byteCode })
            .send({ from: acc, gas: 500000 })
            .on("receipt", (receipt) => {
                console.log('contract address', receipt.contractAddress);
            })
            .then((demoContract) => {
                demoContract.methods
                    .set(902)
                    .send({ from: "0x79B918cb6b152cB37020C622399ac5c64e4CBc7B" })
                    .then(() => {
                        demoContract.methods.x().call((err, data) => {
                            console.log('initvalue', data);
                        })
                    });

            })
    })






// console.log(ABI);
// console.log(byteCode);





