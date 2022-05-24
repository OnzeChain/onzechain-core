# Onzeswap periphery contracts


# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn install`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`


## Verify contracts
### Install truffle:
`npm install -D truffle` & 
`npm install -D truffle-plugin-verify`

### Compile contracts:
`truffle compile`

### Deploy:
`truffle deploy --network mumbai --reset`

### Verify:
`truffle run verify OnzechainV1Factory --network mumbai`
