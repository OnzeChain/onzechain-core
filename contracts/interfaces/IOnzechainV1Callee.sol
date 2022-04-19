pragma solidity >=0.5.0;

interface IOnzechainV1Callee {
    function onzechainV1Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
