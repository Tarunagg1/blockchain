import React, { useEffect, useState } from 'react'

function Players({ state, address }) {
  const [account, setAccount] = useState("No account connected");
  const [registerdPlayers, setRegisterdPlayers] = useState([]);
  const [reload, setReload] = useState(false);

  const [currB, setCurrB] = useState(false);

  const setAccountListener = async (provider) => {
    const { web3 } = state;

    provider.on("accountsChanged", async (accounts) => {
      setAccount(accounts[0]);
      const currB = await web3.eth.getBalance(accounts[0]);
      setCurrB(currB);
    });

  };

  const reloadEffect = () => {
    setReload(!reload);
  };

  useEffect(() => {
    const getAccounts = async () => {
      const { web3 } = state;
      const accounts = await web3.eth.getAccounts();
      setAccountListener(web3.givenProvider);
      setAccount(accounts[0]);
      const currB = await web3.eth.getBalance(accounts[0]);
      setCurrB(currB);

    }
    state.web3 && getAccounts();
  }, [state, state.web3]);



  useEffect(() => {
    const getPlayers = async () => {
      const { contract } = state;
      const players = await contract.methods.alPlayers().call();
      const registerdPlayers = await Promise.all(
        players.map((player) => {
          return player;
        })
      );

      setRegisterdPlayers(registerdPlayers);
      reloadEffect();
    };
    state.contract && getPlayers();
  }, [state, state.contract]);

  return (
    <ul className="list-group" id="list">
      <div className="center">
        <li className="list-group-item" aria-disabled="true">
          <b>Connected account :</b> {account}
        </li>
        <li className="list-group-item">
          <b>Please pay 1 ether on this contract address : </b> {address}
        </li>

        <li className="list-group-item">
          <b>Your wallet balance: </b> {currB}
        </li>
        <li className="list-group-item">
          <b>Registerd Players </b>:
          <br />
          <br />
          {registerdPlayers.length !== 0 &&
            registerdPlayers.map((name) => <p key={name}>{name}</p>)}
        </li>
      </div>
    </ul>
  )
}

export default Players