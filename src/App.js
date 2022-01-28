import logo from "./logo.svg";
import "./App.css";
import PlugConnect from "@psychedelic/plug-connect";
import Balance from "./Components/Balance";
import { StrictMode } from "react";
import { Fragment } from "react";
function App() {
  async function getBalance() {
    let balance = await window.ic.plug.requestBalance();
    balance.forEach((token) => {
      if (token["name"] == "ICP") {
        console.log(" Balance for ICP : ", token["amount"]);
      }
    });
  }

  return (
    <Fragment>
      <PlugConnect
        dark
        title="Connect To Plug"
        // host={network}
        // whitelist={whitelist}
        onConnectCallback={getBalance}
      />
    </Fragment>
  );
}

export default App;
