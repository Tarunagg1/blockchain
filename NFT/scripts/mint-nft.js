require('dotenv').config();

const API_URL = "https://eth-goerli.g.alchemy.com/v2/yrKLHPZ_ruOqs1W9U2IgZ-T49oP3MMip";
const PUBLIC_KEY = "0x06D10942523d25192edDbfEd3535b76767E81c07";
const PRIVATE_KEY = '';

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const web3 = createAlchemyWeb3(API_URL);

const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');



// console.log(contract.abi);

const contractAddress = "0x218dF3baC5109c1e3E6CA8199fac3A779880dEA5";
const nftContract = new web3.eth.Contract(contract.abi.contractAddress);


const mintNFT = async (tokenURI) => {
    const nonce = await web3.eth.getTransaction(PUBLIC_KEY, "latest");
    const txn = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI
    }

    const signPromise = web3.eth.accounts.signTransaction(txn, PRIVATE_KEY);
    signPromise
        .then((signedTx) => {
            web3.eth.sendSignedTransaction(
                signedTx.rawTransaction,
                function (err, hash) {
                    if (!err) {
                        console.log(
                            "The hash of your transaction is: ",
                            hash,
                            "\nCheck Alchemy's Mempool to view the status of your transaction!"
                        );
                    } else {
                        console.log(
                            "Something went wrong when submitting your transaction:",
                            err
                        );
                    }
                }
            );
        })
        .catch((err) => {
            console.log(" Promise failed:", err);
        });

}

mintNFT("https://gateway.pinata.cloud/ipfs/QmR9cmeToyY7paebR5F2CYyoPKq7CjJN33onExP2KtJTvU");
