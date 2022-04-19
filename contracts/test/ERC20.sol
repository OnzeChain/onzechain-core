pragma solidity =0.8.0;

import '../OnzechainV1ERC20.sol';

contract ERC20 is OnzechainV1ERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
