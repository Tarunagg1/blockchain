// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Coonditional{

    function check(int a) public pure returns(string memory){
        string memory value;

        if(a > 0){
            value = "Grater then 0";
        }else if(a == 0){
            value = "Equal to 0";
        }else{
            value = "less then 0";
        }
        return value;
    }
}

