const Factory = artifacts.require('UniswapV2Factory.sol');
const UniswapV2Pair = artifacts.require('UniswapV2pair.sol');
const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');

module.exports = async function (deployer, _network, addresses) {
  try{
    let account1;
    let account2;
    if(_network == 'mumbai'){
      account1 = process.env.META_MASK_ACCOUNT_1;
      account2 = process.env.META_MASK_ACCOUNT_2;
    }else{
      const accounts = await web3.eth.getAccounts();
      account1 = accounts[0];
      account2 = accounts[1];
    }
    console.log("Commencing deployment to :", _network);
    console.log("Account 1: ", account1);
    console.log("Account 2: ", account2);
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    await token1.faucet(account1, 1000000000000);
    await token2.faucet(account1, 1000000000000);
    await token1.faucet(account2, 1000000000000);
    await token2.faucet(account2, 1000000000000);

    const feeAddress = addresses[0];
    await deployer.deploy(Factory, feeAddress);
    const factory = await Factory.deployed();
    console.log("Factory deployed with fee address", feeAddress);
    console.log("Uniswap Factory address: ", factory.address);

    const pairAddress = await factory.createPair(token1.address, token2.address);
    console.log("Swap Pair created")

    await deployer.deploy(UniswapV2Pair);
    const uniswapV2Pair = UniswapV2Pair.deployed();
    console.log("UniswapV2Pair address: ", uniswapV2Pair.address);
    
  } catch (e) {
    console.log(e);
}
  
};

