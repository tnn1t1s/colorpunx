require('dotenv').config();
const { testnets } = require('./config.json');
const { endpoint,
        networkId,
        mnemonic,
        projectId,
        projectSecret } = testnets[process.env.TESTNET];
const HDWalletProvider = require('@truffle/hdwallet-provider');

require('babel-register');
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, endpoint),
      network_id: networkId, 
      gas: 5500000,
      gasPrice: 1000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  compilers: {
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
