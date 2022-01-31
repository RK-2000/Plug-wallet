import React from "react";

<<<<<<< HEAD
class EarthWallet extends React.Component{
    connect = async () =>{
        if(window.earth !== undefined){
            let connection = await window.earth.getAddressMeta();
            if(connection == undefined){
                await window.earth.connect();
                connection = await window.earth.getAddressMeta();
            }
            console.log(connection);
        }
        else{
            console.log("Download Earth Wallet");
        }
    }

    render(){
        return(<button onClick={this.connect}>Connect to Earth Wallet</button>);
    }
}
export default EarthWallet;
=======
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
>>>>>>> ae5c47dcb34488265135fdbca4a009388e6b951a
