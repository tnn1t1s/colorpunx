const Migrations = artifacts.require("Migrations");
web3.eth.transactionPollingTimeout = 3600;

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
