require('dotenv').config();
const { testnets } = require('./config.json');
const { endpoint,
        networkId,
        mnemonic,
        projectId,
        projectSecret } = testnets[process.env.TESTNET];
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeyDev =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';


require('babel-register');
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas: 5500000,
      gasPrice: 1000000000,
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
    },
    moonbase_dev: {
       provider: () => {
          //...
          return new HDWalletProvider(
             privateKeyDev,
             'http://localhost:9933/'
          );
       },
       network_id: 1281,
      },
      moonbase: {
       provider: () => {
          //...
          return new HDWalletProvider(
             mnemonic,
             endpoint
          );
       },
       network_id: networkId,
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
  },
  plugins: ['moonbeam-truffle-plugin'],
};
