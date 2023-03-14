// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Post {
    address public author;
    string public postTitle;
    uint256 public likeCount;
    string public tag;
    string public timestamp;
    string public content;

    struct Likers{
        address creator;
        uint256 likeCount;
        bool isLiked;
        mapping(address => bool) likes;
    }

    Likers[] public likes;
    mapping(address => bool) didLike;

    address[] public likersAddresses;

    constructor(
        string memory _postTitle,
        address _author,
        string memory _tag,
        string memory _timestamp,
        string memory _content
    ) {
        postTitle = _postTitle;
        author = _author;
        tag = _tag;
        timestamp = _timestamp;
        content = _content;
        likeCount = 0;
    }

    function getPostDetails() public view returns(address, string memory,string memory,string memory,string memory,uint256) {
        return(
            author,postTitle,tag,timestamp,content,likeCount
        );
    }

    function likePost() public{
        require(didLike[msg.sender] == false,"allready like this post");
        likeCount += 1;
        likersAddresses.push(msg.sender);
    }
}
