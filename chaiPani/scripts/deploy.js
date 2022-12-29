// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function cosoleBalances(addresses) {
  let count = 0;
  for (const address of addresses) {
    console.log('address', await getBalances(address));
  }
}


async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory('Chai');
  const contract = await chai.deploy();

  await contract.deployed();

  const addresses = [owner.address,from1.address];
  await cosoleBalances(addresses);

  const amount = {value:hre.ethers.utils.parseEther('1')};

  await contract.connect(from1).buyChai("from1","nice chai",amount);
  await contract.connect(from2).buyChai("from2","nice chai",amount);
  await contract.connect(from3).buyChai("from3","nice chai",amount);

  await cosoleBalances(addresses);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
