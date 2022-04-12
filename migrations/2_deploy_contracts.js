const OnzechainV1Factory = artifacts.require("OnzechainV1Factory.sol");


module.exports = async function (deployer, network, accounts) {
  const owner = accounts[0];

  console.log(`Using network: ${network}`);
  console.log(`Using account: ${owner}`);

  // Deploying Factory contract.
  await deployer.deploy(OnzechainV1Factory, owner);
  const factory = await OnzechainV1Factory.deployed();



  const initCodeOnzePairHash = await factory.INIT_CODE_PAIR_HASH();
  console.log(`OnzechainV1Pair code hash: ${initCodeOnzePairHash}`)

  console.log(`OnzechainV1Factory deployed at address: ${factory.address}`);
 


  
};
// contrcat address 0xDd923560d06Cb48d247d3Ca7fe1B171C083dfa03