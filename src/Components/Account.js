import React from "react";
import PlugWallet from "./PlugWallet";
import EarthWallet from "./EarthWallet";
class Account extends React.Component {
  state = {
    address: "Not Connected",
    balance: 0,
    wallet: "",
  };

  setAccountDetails = (props) => {
    this.setState({ address: props[0] });
    this.setState({ balance: props[1] });
    this.setState({ wallet: props[2] });
  };

  disconnect = async () => {
    this.setState({ address: "Not Connected" });
    this.setState({ balance: 0 });
    if (this.state.wallet === "plug") {
      window.ic.plug.deleteAgent();
      window.ic.plug.disconnect().then((value) => {
        console.log("here");
      });
    } else {
      console.log("cannot disconnect earth wallet");
    }
    this.setState({ wallet: "" });
  };

  render() {
    let content;
    const address = this.state.address;
    const bal = this.state.balance;
    if (address === "Not Connected") {
      content = (
        <div className="wallets">
          <PlugWallet
            setAccountDetails={this.setAccountDetails}
            disconnect={this.disconnect}
          />
          <br />
          <EarthWallet
            setAccountDetails={this.setAccountDetails}
            disconnect={this.disconnect}
          />
        </div>
      );
    } else {
      content = (
        <div>
          <p>Wallet = {this.state.address}</p>
          <p>Balance = {this.state.balance}</p>
          <button onClick={this.disconnect}>Disconnect</button>
        </div>
      );
    }
    return <React.Fragment>{content}</React.Fragment>;
  }
}
export default Account;
