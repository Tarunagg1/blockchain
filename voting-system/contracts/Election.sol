// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Election {
    
    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        addCandidate("Candidate 3");
    }

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    uint256 public candidateCount;

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public voters;

    event votedEvent(uint256 indexed _candidateId);

    function addCandidate(string memory _name) private {
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }

    function vote(uint256 _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidateCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
