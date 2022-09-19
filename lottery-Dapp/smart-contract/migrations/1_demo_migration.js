const Lottery = artifacts.require('./Lottery.sol');

module.exports = function(deployer) {
    deployer.deploy(Lottery);
}


// 0x4800C181D807Cc7e09948AC3E0297cC3277f502d
// ganache 0xa428dBdC8cBEb3d93e4D1cA5272bB7bFc0154D93