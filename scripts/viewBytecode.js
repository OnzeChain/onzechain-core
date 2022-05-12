const assert = require('assert');

const OnzechainV1Factory = artifacts.require("OnzechainV1Factory.sol");
const OnzechainV1Pair = artifacts.require("OnzechainV1Pair.sol");


const onzeFactoryAddress = '0x3b5238312DcBb5ADEdA7470109e60c39CF9ad406';

module.exports = async (callback) => {
    try {
        assert(onzeFactoryAddress, 'OnzeRouter address is undefined.');
        assert(onzeFactoryAddress !== '', 'OnzeRouter address is empty.');

        const onzeFactory = await OnzeV1Factory.at(onzeFactoryAddress);
        
        const codeOnzePairHash = await onzeFactory.INIT_CODE_PAIR_HASH();

        const onzePairBytecode = OnzechainV1Pair.bytecode;

        const web3CodeOnzePairHash = web3.utils.soliditySha3(onzePairBytecode);
        console.log(`OnzechainV1Pair Bytecode hash (from Web3js):      ${web3CodeOnzePairHash}`);
        console.log(`OnzechainV1Pair Bytecode hash (from OnzechainV1Factory): ${codeOnzePairHash}`);

        assert.strictEqual(codeOnzePairHash, web3CodeOnzePairHash, "OnzechainV1Pair contract hashes NOT match: web3JS <> contract call");
        console.log('>>>> The script finished successfully. <<<<');
        callback();
    } catch (error) {
        console.log(error);
        callback(error);
    }
};