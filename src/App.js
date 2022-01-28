import logo from "./logo.svg";
import "./App.css";
import PlugConnect from "@psychedelic/plug-connect";

function App() {
  async function getBalance() {
    let balance = await window.ic.plug.requestBalance();
    console.log(balance);
  }

  const network = "";
  const whitelist = "";
  return (
    <PlugConnect
      dark
      title="Connect To Plug"
      // host={network}
      // whitelist={whitelist}
      onConnectCallback={getBalance}
    />
  );
}

export default App;
