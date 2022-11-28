const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcBatchProvider('https://mainnet.infura.io/v3/a322a7cbdfae48ea9df8afeb1417301f');


const queryBlocjChain = async () => {
    const block = await provider.getBlockNumber();
    console.log('current block number', block);

    const balance = await provider.getBalance("0x06D10942523d25192edDbfEd3535b76767E81c07");
    console.log('balance: ', ethers.utils.formatEther(balance));
}



queryBlocjChain();
