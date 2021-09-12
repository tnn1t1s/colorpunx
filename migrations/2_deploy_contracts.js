const ColorPunx = artifacts.require("ColorPunx");


web3.eth.transactionPollingTimeout = 3600;
module.exports = function(deployer) {
  deployer.deploy(ColorPunx);
};
