// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// For Truffle
//const contract = require("./build/contracts/HelloWorld.json");

// For Hardhat
const contract = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

//console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const factory = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main(){
    const createPair = await factory.createPair();
    console.log("INIT_CODE_HASH is " + createPair)
}
main();