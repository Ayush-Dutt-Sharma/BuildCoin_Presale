// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BuildCoinERC20 is ERC20{
    constructor() ERC20("BUILDCOIN","BUDCN"){
        _mint(msg.sender,10000000000000000000000000);
    }
}