// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.5.0 <0.9.0;


contract Token{
    string public name = "Hardhat token";
    string public symbol = "HHT";
    uint public totalSupply = 10000;

    address public owner;

    mapping(address => uint) balances;


    constructor(){
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to,uint amount) external {
        require(balances[msg.sender] >= amount,"Not enough token to transfer");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }


    function balanceOf(address to) external view returns(uint){
        return balances[to];
    }
}


