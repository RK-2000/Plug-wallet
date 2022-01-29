import logo from "./logo.svg";
import "./App.css";
import PlugConnect from "@psychedelic/plug-connect";
import Balance from "./Components/Balance";
import { StrictMode } from "react";
import { Fragment } from "react";
function App() {
  async function getBalance() {
    let balance = await window.ic.plug.requestBalance();
    for (let i = 0; i < balance.length; i++) {
      if (balance[i]["name"] == "ICP") {
        console.log(" Balance for ICP : ", balance[i]["amount"]);
        let agent;
        agent = await window.ic.plug.createAgent();
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
