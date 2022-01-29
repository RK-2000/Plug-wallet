import logo from "./logo.svg";
import "./App.css";
import PlugConnect from "@psychedelic/plug-connect";
import Balance from "./Components/Balance";
import { StrictMode } from "react";
import { Fragment } from "react";
function App() {
  // Returns Balance and Wallet Address
  async function getBalance() {
    // Gets Balance of all the tokens in wallet
    let balance = await window.ic.plug.requestBalance();
    for (let i = 0; i < balance.length; i++) {
      // Finds the ICP Account and returns it balance
      if (balance[i]["name"] == "ICP") {
        console.log(" Balance for ICP : ", balance[i]["amount"]);
        // Create an agent
        await window.ic.plug.createAgent();
        // Get agent Wallet ID
        let id = await window.ic.plug.agent.getPrincipal();
        console.log(id.toText());
      }
    }
    balance.forEach((token) => {});
  }

  return (
    <Fragment>
      <PlugConnect
        dark
        title="Connect To Plug"
        onConnectCallback={getBalance}
      />
    </Fragment>
  );
}

export default App;
