const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcBatchProvider('https://goerli.infura.io/v3/a322a7cbdfae48ea9df8afeb1417301f');

const walletAddress = "0xa6902aa344Bc8a55d78521d6ab93b6ebC97fa41e"
const wallletAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "accountBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_num",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


const contractIntrection = async function () {
    const wallletContract = new ethers.Contract(walletAddress, wallletAbi, provider);

    const contractName = await wallletContract.name();
    console.log('contractName', contractName);

    const contractBalance = await wallletContract.contractBalance();
    console.log('contractBalance', ethers.utils.formatEther(contractBalance));

    const userBalance = await wallletContract.accountBalance("0x06D10942523d25192edDbfEd3535b76767E81c07");
    console.log('userBalance', ethers.utils.formatEther(userBalance));
}


contractIntrection();