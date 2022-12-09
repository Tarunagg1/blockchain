// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;


contract Funder{
    uint public noOfFunders;

    mapping(uint => address) private funders;

    receive() external payable {}

    function transfer() external payable{
        funders[noOfFunders] = msg.sender;
    }

    function withdraw(uint withdrawAmount) external{
        require(withdrawAmount <= 2000000000000000000,"More then 2 ether not allowed");
        payable(msg.sender).transfer(withdrawAmount);
    }

}

