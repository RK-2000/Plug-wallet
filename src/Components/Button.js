import PlugConnect from "@psychedelic/plug-connect";
import React from "react";

class Button extends React.Component {
  state = {
    wallet: "Not Connected",
    bal: 0,
  };

  getBalance = async () => {
    // Gets Balance of all the tokens in wallet
    let balance = await window.ic.plug.requestBalance();
    for (let i = 0; i < balance.length; i++) {
      // Finds the ICP Account and returns it balance
      if (balance[i]["name"] == "ICP") {
        this.setState({ bal: balance[i]["amount"] });
        console.log(" Balance for ICP : ", balance[i]["amount"]);
        // Create an agent
        await window.ic.plug.createAgent();
        // Get agent Wallet ID
        let id = await window.ic.plug.agent.getPrincipal();
        this.setState({ wallet: id.toText() });
        console.log(id.toText());
      }
    }
  };

  render() {
    const wallet = this.state.wallet;
    let content;

    // If Not Connected then preview the connect button
    if (wallet == "Not Connected") {
      content = (
        <PlugConnect
          dark
          title="Connect To Plug"
          onConnectCallback={this.getBalance}
        />
      );
    }
    // Else the wallet address and ICP balance
    else {
      content = (
        <div>
          <p>Wallet = {this.state.wallet}</p>
          <p>Balance = {this.state.bal}</p>
        </div>
      );
    }
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default Button;
