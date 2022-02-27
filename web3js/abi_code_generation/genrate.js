const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let solFileContent = fs.readFileSync("demo.sol").toString();

let input = {
    language:"Solidity",
    sources:{
        "demo.sol":{
            content:solFileContent
        },
    },
    settings: {
        outputSelection:{
            "*":{
                "*":["*"]
            },
        },
    },
};


let output = JSON.parse(solc.compile(JSON.stringify(input)));

const ABI = output.contracts["demo.sol"]["demo"].abi;
const BYTCODE = output.contracts["demo.sol"]["demo"].evm.bytecode.object;



let contract = new web3.eth.Contract(ABI);
let defaultAccount = null;

web3.eth.getAccounts().then((accounts) => {

    defaultAccount = accounts[0];
    contract.deploy({data:BYTCODE})
    .send({from:defaultAccount,gas:500000})
    .on("receipt",(receipt) => {
        console.log(receipt.contractAddress);
    }).then((demoContract) => {
        demoContract.methods.x().call((err,data) => {
            console.log(data);
        })
    });
});










