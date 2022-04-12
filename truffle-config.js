const envConfig = require('./config/env')();
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

// Environment Configuration
const addressCountValue = envConfig.getAddressCount().getOrDefault();
const mnemonicKeyValue = envConfig.getMnemonic().get();
const defaultAddressIndex = envConfig.getDefaultAddressIndex().getOrDefault();
const polyscanApiKey = envConfig.getPolyscanApiKey().getOrDefault();
const networkurl = envConfig.getNetworkUrl().getOrDefault();
module.exports = {
  web3: Web3,
  api_keys: {
    etherscan: polyscanApiKey,
  },
  plugins: [
		'truffle-plugin-verify',
	],
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
    // Block explorer: https://testnet.bscscan.com
    // RPCs: https://docs.binance.org/smart-chain/developer/rpc.html
    mumbai: {
      provider: () => new HDWalletProvider(mnemonicKeyValue, `https://matic-mumbai.chainstacklabs.com`, defaultAddressIndex, addressCountValue),
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
  }
}
