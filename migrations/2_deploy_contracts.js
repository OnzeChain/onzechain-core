const Factory = artifacts.require('OnzechainV1Factory.sol');

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

    const feeAddress = addresses[0];
    await deployer.deploy(Factory, feeAddress);
    const factory = await Factory.deployed();
    console.log("Factory deployed with fee address", feeAddress);
    console.log("Onze Factory address: ", factory.address);


    const initCodeOnzePairHash = await factory.INIT_CODE_PAIR_HASH();
    console.log(`OnzechainV1Pair code hash: ${initCodeOnzePairHash}`)
  


    
  } catch (e) {
    console.log(e);
}
  
};
// To verify using truffle first install "npm install -D truffle-plugin-verify" then 
// run "truffle run verify OnzechainV2Factory --network mumbai"
// factory address =  0x015ec2E2ef1e2Bf2F4E3fd768C6A68E2585DEe6C
// Token 1 address = 0x992a3Edd17DF2739c8d1CD07D574D2Cc4E6d2923
// Token 2 address = 0x041C2d6C3BDCa599E12195D8F4476F86885d56E7
// Init_Code_Pair_Hash = 0x74ed3f79f73f125a6608d0844327dd522ea8cd9cb89aa003ea263e47f47befcb
// Router address - 0xCB005106E0C6b7ac110818B6765554B852505868