import React from "react";

class EarthWallet extends React.Component {
  state = {
    wallet: "Not Connected",
    balance: 0,
  };

  connectWallet = async () => {
    if (window.earth !== undefined) {
      let connection = await window.earth.isConnected();
      if (!connection.connected) {
        await window.earth.connect();
      }
      const icp = window.providerManager.getProviderFor("ICP");
      let MetaData = await icp.getMethod("wallet.getAddress")();
      const details = [MetaData, 0, "earth"];
      this.props.setAccountDetails(details);
    }
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.connectWallet}>Connect To Earth Wallet</button>
      </React.Fragment>
    );
  }
}
export default EarthWallet;
