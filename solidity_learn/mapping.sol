// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract mappingDemo {
    struct Student {
        uint256 roll;
        string name;
    }

    mapping(uint256 => string) public roll_no;

    function setter(uint keys, string memory value) public {
        roll_no[keys] = value;
    }

    function setter1(uint _roll, string memory _name, uint _class) public {
        
    }
}
