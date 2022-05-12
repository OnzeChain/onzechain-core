//const envConfig = require('./config/env')();
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');


const mnemonicKeyValue = process.env.MNEMONIC_KEY;
const polyscanApiKey = process.env.POLYGONSCAN_API_KEY;

module.exports = {
  web3: Web3,
  mocha: {
    enableTimeouts: false,
  },
  compilers: {
    solc: {
      version: '0.5.16',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  networks: {

    mumbai: {
      provider: () => new HDWalletProvider(mnemonicKeyValue, `https://polygon-mumbai.infura.io/v3/dd69e3a95b884508acf4888dec62d415`),
      network_id: 80001,       // mumbai's id
      confirmations: 1,
      skipDryRun: false,
      websocket: true,
      timeoutBlocks: 90000,
      networkCheckTimeout: 9000000
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonicKeyValue, `https://bsc-dataseed1.binance.org`, defaultAddressIndex, addressCountValue),
      network_id: 0x38,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  plugins: [
		'truffle-plugin-verify'],
    api_keys:{
      polygonscan: polyscanApiKey,
    }
	
}
