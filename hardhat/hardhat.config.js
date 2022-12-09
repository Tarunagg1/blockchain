/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = '';
const GOERIL_PRIVATE_KEY = '';

module.exports = {
  solidity: "0.8.17",

  networks: {
    goeril: {
      url: '',
      account: [`${GOERIL_PRIVATE_KEY}`]
    }
  }
};
