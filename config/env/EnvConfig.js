require('dotenv').config();
const EnvValue = require('./EnvValue');

const DEFAULT_GAS_WEI = "4600000";
const DEFAULT_ADDRESS_COUNT = "10";
const DEFAULT_ADDRESS_INDEX = "0";

const ADDRESS_COUNT_KEY = 'ADDRESS_COUNT_KEY';
const DEFAULT_ADDRESS_INDEX_KEY = 'DEFAULT_ADDRESS_INDEX_KEY';
const MNEMONIC_KEY = 'MNEMONIC_KEY';
const GAS_WEI_KEY = 'GAS_WEI_KEY';
const GAS_PRICE_GWEI_KEY = 'GAS_PRICE_GWEI_KEY';
const POLYGONSCAN_API_KEY = 'POLYGONSCAN_API_KEY';
const API_KEY = 'API_KEY';

class EnvConfig {
    constructor() {
        this.conf = new Map();
        this.initializeConf();
    }
}

EnvConfig.prototype.initializeConf = function() {
    this.createItem(DEFAULT_ADDRESS_INDEX_KEY, DEFAULT_ADDRESS_INDEX, 'This is the address index to be used as default.');
    this.createItem(ADDRESS_COUNT_KEY, DEFAULT_ADDRESS_COUNT, 'Addresses needed to deploy the smart contracts.');
    this.createItem(MNEMONIC_KEY, undefined, 'Mnemonic to generate addresses.');
    this.createItem(GAS_WEI_KEY, DEFAULT_GAS_WEI, 'Default gas value in wei.');
    this.createItem(GAS_PRICE_GWEI_KEY, undefined, 'Default gas price value in gwei.');
    this.createItem(POLYGONSCAN_API_KEY, undefined, 'POLYscan API key to use to validate the contracts.');
    this.createItem(API_KEY, undefined, 'the url')
}

EnvConfig.prototype.createItem = function(name, defaultValue = undefined, description = undefined) {
    const value = process.env[name];
    this.conf.set(name, new EnvValue(name, value, defaultValue, description));
}

EnvConfig.prototype.getMnemonic = function() {
    return this.conf.get(MNEMONIC_KEY);
}

EnvConfig.prototype.getAddressCount = function() {
    return this.conf.get(ADDRESS_COUNT_KEY);
}

EnvConfig.prototype.getGasWei = function() {
    return this.conf.get(GAS_WEI_KEY);
}

EnvConfig.prototype.getGasPriceGwei = function() {
    return this.conf.get(GAS_PRICE_GWEI_KEY);
}

EnvConfig.prototype.getDefaultAddressIndex = function() {
    return this.conf.get(DEFAULT_ADDRESS_INDEX_KEY);
}

EnvConfig.prototype.getPolyscanApiKey = function() {
    return this.conf.get(POLYGONSCAN_API_KEY);
}

EnvConfig.prototype.getNetworkUrl = function() {
    return this.conf.get(API_KEY);
}

EnvConfig.prototype.validate = function() {
    if (!this.getMnemonic().hasValue()) {
        throw new Error('MNEMONIC_KEY env variable must be defined in your local .env file.');
    }
    if (!this.getGasPriceGwei().hasValue()) {
        throw new Error('GAS_PRICE_GWEI_KEY env variable must be defined in your local .env file.');
    }
}

module.exports = EnvConfig;