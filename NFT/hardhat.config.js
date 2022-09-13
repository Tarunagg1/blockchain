require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

// /** @type import('hardhat/config').HardhatUserConfig */


// 0xd9145CCE52D386f254917e481eB44e9943F39138

// https://eth-goerli.g.alchemy.com/v2/yrKLHPZ_ruOqs1W9U2IgZ-T49oP3MMip
const {API_URL,PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    ropsten: {
      url:API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

// 0x540313f59F0f7c16085920A3fA86c1C7E1829266

// 0x218dF3baC5109c1e3E6CA8199fac3A779880dEA5    --- NFT

