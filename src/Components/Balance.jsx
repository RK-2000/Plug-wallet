import React, { Component } from "react";

class Balance extends Component {
  state = {
    balance: 0,
    wallet: "",
  };

  render() {
    return (
      <div className="main">
        <div className="balance">Balance = {this.state.balance}</div>
        <div className="balance">Wallet Address = {this.state.wallet}</div>
      </div>
    );
  }
}
export default Balance;
