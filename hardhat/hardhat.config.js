/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = 'yrKLHPZ_ruOqs1W9U2IgZ-T49oP3MMip';
const POPSTEN_PRIVATE_KEY = "";


module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${POPSTEN_PRIVATE_KEY}`]
    }
  }
};
