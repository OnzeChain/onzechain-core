/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 require("@nomiclabs/hardhat-waffle");
 

module.exports = {
  solidity: {
    compilers: [    
          {version: "0.4.18"},
          {version: "0.5.16"},
          {version: "0.6.12"},
          {version: "0.6.6"},
          {version: "0.8.4"}
      ],      
      settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }

  },
  networks: {
    dev: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    mumbai: {
      url: process.env.MUMBAI_INFURA_API_URL,
      accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`],
      chainId:80001
    
    }
  },
    etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
};
