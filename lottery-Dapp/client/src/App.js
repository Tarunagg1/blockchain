import React, { useState, useEffect, Fragment } from "react";
import './App.css';
import getWeb3 from './getWeb3';
import Lottery from './contract/Lottery.json';
import { Route, Link, Routes } from "react-router-dom";
import Intro from './components/Intro';
import Players from './components/Players';
import Manager from './components/Manager';


function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();
        // console.log(networkId);

        const deployedNetwork = Lottery.networks[networkId];

        // console.log("Contract Address:", deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Lottery.abi,
          deployedNetwork && deployedNetwork.address
        );
        setAddress(deployedNetwork.address);
        setState({ web3, contract: instance });
      } catch (error) {
        console.log(error);
        alert("Falied to load web3 or contract.");
      }
    };
    init();
  }, []);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link navtext" aria-current="page">
                  Lottery System
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/manager"
                  className="nav-link navtext"
                  aria-current="page"
                >
                  Manger
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/players" className="nav-link navtext">
                  Player
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/manager" element={<Manager state={state} />} />
        <Route path="/players" element={<Players address={address} state={state} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
