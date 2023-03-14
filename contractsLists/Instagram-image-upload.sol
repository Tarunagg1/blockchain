// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Instagram{
    struct Image{
        uint id;
        string url;
        string caption;
        uint totalTipped;
        address payable author;
        address[] trimpperAddresses;
    }

    uint256 public imageCount;

    mapping(uint256 => Image) public images;

    event ImageCreated(
        uint id,
        string url,
        string caption,
        address payable author
    );

    event ImageTipped(
        uint id,
        string url,
        string caption,
        uint currentTip,
        uint totalTipped,
        address payable author
    );

    function uploadImage(string memory _inputUrl, string memory caption) public{
        require(msg.sender != address(0),"invaid wallet address");
        imageCount++;
        images[imageCount] = Image(
            imageCount,
            _inputUrl,
            caption,
            0,
            payable(msg.sender),
            new address[](0)
        );
        emit ImageCreated(imageCount,_inputUrl,caption,payable(msg.sender));
    }

    function tipImageOwner(uint256 _id) public payable{
        Image memory _image = images[_id];

        require(0 < _id && _id <= imageCount);
        require(0 < msg.value,"A tip should be grater then 0");
        require(msg.sender != _image.author,"owner cannot tip the image");
        payable(address(_image.author)).transfer(msg.value);
        _image.totalTipped += msg.value;
        images[_id] = _image;

        emit ImageTipped(_id, _image.url, _image.caption, msg.value, _image.totalTipped,_image.author);
    }


}

