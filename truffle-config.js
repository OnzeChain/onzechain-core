const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();  // Store environment-specific variable from '.env' to process.env

module.exports = {
  contracts_build_directory: "./build",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    mumbai: {
      provider: function () { return new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mumbai.infura.io/v3/dd69e3a95b884508acf4888dec62d415`)},
      network_id: 80001,
      gas: 5000000,
      gasPrice: 10000000000,
      confirmations: 2,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 400,
      skipDryRun: true,
      websocket: true
      // provider: () => new HDWalletProvider(process.env.MNEMONIC, 
      //   `https://rpc-mumbai.matic.today`),
      //   network_id: 80001,
      //   confirmations: 2,
      //   timeoutBlocks: 200,
      //   skipDryRun: true,
      //   gas: 6000000,
      //   gasPrice: 10000000000,
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.PK, `https://rpc-mainnet.matic.network`),
      network_id: 137,
      gasPrice: 1000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PK, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
      //port: 8545,
      network_id: "1",
      gas: 6000000,
      gasPrice: 4000000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.PK, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
     // port: 8545,
      network_id: "4",
      gas: 6000000,
      gasPrice: 40000000000
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.PK, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
     // port: 8545,
      network_id: "3",
      gas: 6000000,
      gasPrice: 40000000000
    },
    rinkebyLocal: {
      host: "localhost",
     // port: 9545,
      network_id: "4", // Rinkeby network id
      from:"0x1e09a22f24d8fd302b2028a688658e9b29551969"
    },
    coverage: {
      host: "localhost",
      network_id: "*",
     // port: 8545,         // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01      // <-- Use this low gas price
    },
  },
  compilers: {
    solc: {
      version: "0.5.16",
     // port: 9545, 
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999   // Optimize for how many times you intend to run the code
        }
      }
    }    
  }
};