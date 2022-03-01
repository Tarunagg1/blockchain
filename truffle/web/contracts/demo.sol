
// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract demo{
    uint numbwer;

    function set(uint _number) public {
        numbwer = _number;
    }

    function get() public view returns(uint) {
        return numbwer;
    }
}