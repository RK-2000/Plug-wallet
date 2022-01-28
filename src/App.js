import logo from "./logo.svg";
import "./App.css";
import PlugConnect from "@psychedelic/plug-connect";

function App() {
  const network = "";
  const whitelist = "";
  return (
    <PlugConnect
      dark
      title="Connect To Plug"
      // host={network}
      // whitelist={whitelist}
    />
  );
}

export default App;
