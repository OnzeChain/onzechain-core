// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { writeAddr,writeJson } = require("./artifact_log")
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

//  

 // This is just a convenience check
 if (network.name === "hardhat") {
  console.warn(
    "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
  );
}

// ethers is avaialble in the global scope
const [deployer] = await ethers.getSigners();
console.log(
  "Deploying the contracts with the account:",
  await deployer.getAddress()
);

console.log("Account balance:", (await deployer.getBalance()).toString());
 
// deployer address as feeToSetter
feeToSetter = deployer.getAddress()
// Fill your address as feeToSetter in constructor -> Deploy
const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
const Factory = await UniswapV2Factory.deploy(feeToSetter);
await Factory.deployed();

console.log("UniswapV2Factory address:", Factory.address);

// save contract address
await writeAddr(Factory.address, "UniswapV2Factory");

// save contract address
await writeAddr(Factory.address, "UniswapV2Factory");

// // save init code hash
// const init_code_pair_hash = await Factory.INIT_CODE_PAIR_HASH();
// console.log("init_code_pair_hash:", init_code_pair_hash)
// await writeJson("INIT_CODE_PAIR_HASH", init_code_pair_hash, "INIT_CODE_PAIR_HASH")
// // We also save the contract's artifacts and address in the frontend directory
// // saveFrontendFiles(token);

// Pancakepair
const _UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
const UniswapV2Pair = await _UniswapV2Pair.deploy();
await UniswapV2Pair.deployed();
console.log("PancakePair address:", UniswapV2Pair.address);
// save contract address
await writeAddr(UniswapV2Pair.address, "PancakePair");

// // CakeToken
// const _QuickToken = await ethers.getContractFactory("QuickToken");
// const QuickToken = await _QuickToken.deploy();
// await QuickToken.deployed();
// console.log("CakeToken address:", QuickToken.address);

console.log("Deploying Token1 and Token2")
const Token1 = await hre.ethers.getContractFactory("Token1");
const Token2 = await hre.ethers.getContractFactory("Token2");
const token1Factory = await Token1.deploy();
const token2Factory = await Token2.deploy();

console.log("Token 1 is deployed to address: ", token1Factory.address)
console.log("Token 2 is deployed to address: ", token2Factory.address)
// save token address
await writeAddr(Token1.address, "Token1");
await writeAddr(Token2.address, "Token2");
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });