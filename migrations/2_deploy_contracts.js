const PancakeFactory = artifacts.require("PancakeFactory");
const myAddress = '0x49680A66Bd56EEC89aBFeDDc55426898D813876A'

module.exports = function (deployer) {
  deployer.deploy(PancakeFactory, myAddress);
};
