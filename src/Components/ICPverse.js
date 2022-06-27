import React from "react";
import logo from "./img/logo.png";
import comming_soon from "./img/coming soon.png"
class ICPverse extends React.Component{
    render(){
        return(
            <section className="heroSection">
                <div className="container">
                    <img src={logo} alt="" />
                    <div className="socialIcons">
                    {/* <a className="socialIcon" href="#"><i className="fab fa-discord"></i></a>
                    <a className="socialIcon" href="#"><i className="fab fa-twitter"></i></a> */}
                    </div>
                    <img src={comming_soon} alt="" />
                </div>
            </section>
        );
    }
}
export default ICPverse;