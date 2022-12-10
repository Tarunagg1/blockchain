import React from 'react'
import { useState, useEffect } from "react";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import { ethers } from "ethers";
import "./App.css";


function App() {
  const [greeting, doGreeting] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const loadProvicer = () =>{
      let contractAddress = "";
      const url = "http://localhost:8545";
      const provider = new ethers.providers.JsonRpcBatchProvider(url);
      const contract = new ethers.Contract(contractAddress,Greeter.abi,provider);
      setContract(contract);
      setProvider(provider);
    }
  }, [])
  

  const changeGreetings = () => {

  }

  return (
    <div className="center">
      <h3>greeting</h3>
      <input className="input" type="text" id="value"></input>
      <button className="button" onClick={changeGreetings}>
        Change
      </button>
    </div>
  )
}

export default App