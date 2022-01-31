import React from "react";

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