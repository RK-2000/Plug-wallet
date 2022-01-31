import PlugConnect from "@psychedelic/plug-connect";
import React from "react";

class PlugWallet extends React.Component {
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
        // Create an agent
        await window.ic.plug.createAgent();
        // Get agent Wallet ID
        let id = await window.ic.plug.agent.getPrincipal();
        const details = [id.toText(), balance[i]["amount"], "plug"];
        this.props.setAccountDetails(details);
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <PlugConnect
          dark
          title="Connect To Plug"
          onConnectCallback={this.getBalance}
        />
      </React.Fragment>
    );
  }
}

export default PlugWallet;
