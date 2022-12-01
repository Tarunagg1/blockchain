const Web3 = require('web3');

const web3 = new Web3("HTTP://127.0.0.1:7545");


// get balance
web3.eth.getBalance('0x2C28756E7138682E8eeC943ACB1044f02ec3a612')
	.then(function (bal) {
		console.log(web3.utils.fromWei(bal, "ether"));
	});

// deploy smart contract
const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "x",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// let contract = new web3.eth.Contract(ABI, "address");

// get vall
// contract.methods.x()
// 	.call()
// 	.then(console.log);


// // set vall
// contract.methods
// 	.set(902)
// 	.send({ from: "Account address" })
// 	.then(console.log);



// get all accounts
// web3.eth.getAccounts().then(console.log);

// generate abi byte 


