const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// contract
let contract = new web3.eth.Contract([
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
], "0x018CeF4B87344717EaEaF98bF006036e2718f928")  // write contract

// getting values
// contract.methods.x().call()
// .then((ele) => {
//     console.log(ele);
// })

// stting values
// contract.methods.set(90).send({from:"0x7F7088049639CE437108D1641188427A1EE48937"})

// get balance from eth account
// web3.eth.getBalance("0x7F7088049639CE437108D1641188427A1EE48937")
// .then((ele) => {
//     console.log(web3.utils.fromWei(ele,"ether"));
// })

// // send eth to  other account
// web3.eth.sendTransaction({from:"0x7F7088049639CE437108D1641188427A1EE48937",to:"0xEE0a6A6bbD3cDE47b99C06af300Cb71c5fE9B41a",value:web3.utils.toWei("5","ether")})





