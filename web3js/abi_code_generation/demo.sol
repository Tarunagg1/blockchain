// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract demo{
    uint public x=10;

    function set(uint _x) public{
        x= _x;
    }
}
