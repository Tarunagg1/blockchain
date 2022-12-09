import './App.css';
import { useState, useEffect } from 'react';
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { loadContract } from './utils/load-contract';

function App() {

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [reload, shouldReload] = useState(false);

  const transferFund = () => { }

  const withdrawFund = () => { }

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      const contract = await loadContract("Funder", provider);
      if (provider) {
        // setAccountListener(provider);
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("Please install MetaMask!");
      }

      // if (window.ethereum) {
      //   provider = window.ethereum;
      //   try {
      //     await provider.enable();
      //   } catch {
      //     console.error("User is not allowed");
      //   }
      // } else if (window.web3) {
      //   provider = window.web3.currentProvider;
      // } else if (!process.env.production) {
      //   provider = new Web3.providers.HttpProvider("http://localhost:7545");
      // }

      // setWeb3Api({
      //   web3:new Web3(provider),
      //   provider:provider
      // })
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccounts = async () => {
      console.log(web3Api);
      const accounts = await web3Api.web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0])
    }
    web3Api.web3 && getAccounts();
  }, [web3Api])
  

  // console.log(web3Api);

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Funding</div>
        <div className="card-body">
          <h5 className="card-title">Balance: {balance} ETH </h5>
          <p className="card-text">
            Account : {account ? account : "not connected"}
          </p>
          {/* <button
          type="button"
          class="btn btn-success"
          onClick={async () => {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            console.log(accounts);
            setAccount(accounts[0]);
          }}
        >
          Connect to metamask
        </button> */}
          &nbsp;
          <button type="button" className="btn btn-success " onClick={transferFund}>
            Transfer
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary " onClick={withdrawFund}>
            Withdraw
          </button>
        </div>
        <div className="card-footer text-muted">Code Eater</div>
      </div>
    </>
  );
}

export default App;
