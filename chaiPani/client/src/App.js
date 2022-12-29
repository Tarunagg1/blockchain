import React, { useState, useEffect } from 'react';
import abi from './contracts/chai.json';
import { ethers } from 'ethers';
import Buy from './components/Buy';
import Memos from './components/Memos';

function App() {
  const [state, setstate] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setaccount] = useState("None")

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x6CD0aA73f275b283F212571F1bAE52802A594167";
      const coontractABi = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({ method: "eth_requestAccounts" });
          // console.log(account);
          setaccount(account);

          window.ethereum.on('chainChanged', () => {
            window.location.reload();
          });

          window.ethereum.on('accountChanged', () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, coontractABi, signer);
          setstate({ provider, signer, contract });
        } else {
          alert("Please install metamask")
        }
      } catch (error) {
        console.log(error);
      }
    }
    connectWallet();
  }, []);

  return (
    <div className="app">
      <p>connected Account: {account[0]}</p>
      <Buy state={state} />
      <Memos state={state} />
    </div>
  )
}

export default App