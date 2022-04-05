pragma solidity = 0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed('Token 1','TK1', 18) public {}
}