// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.14;

contract demo {
    uint256 number;

    function set(uint256 _number) public{
        number = _number;
    }

    function get() public view returns (uint256) {
        return number;
    }
}
