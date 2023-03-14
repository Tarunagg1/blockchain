// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Discord is ERC721 {
    uint256 public totalSupply;
    uint256 public totalChannels;
    address public owner;

    constructor(string memory _name,string memory _symbol) ERC721(_name, _symbol) {
        owner = msg.sender;
    }
    
}
