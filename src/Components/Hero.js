import React from "react";
import logo from "./img/logo.png";
import comming_soon from "./img/coming soon.png";

class Hero extends React.Component {
  render() {
    return (
      <section className="heroSection">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 mt-0 mt-lg-2">
              <img src={logo} alt="" />
              <div className="socialIcons">
                <a className="socialIcon" href="#">
                  <i className="fab fa-discord"></i>
                </a>
                <a className="socialIcon" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7 offset-0 offset-lg-1 mt-5 mt-lg-0">
              <div className="details">
                <div className="detail">
                  <a className="detailLink" href="#">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <div className="mainText">
                    ICPverse is the first DAO Art Marketplace in all ICP
                    ecosystem.
                  </div>
                </div>
                <div className="detail">
                  <a className="detailLink" href="#">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <div className="mainText">
                    IDO (Initial Dex Offering) platform
                  </div>
                </div>
                <div className="detail">
                  <a className="detailLink" href="#">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <div className="mainText">
                    IGO launchpad (First dedicated Blockchain Gaming launchpad
                    on ICP).
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={comming_soon} alt="" />
        </div>
      </section>
    );
  }
}
export default Hero;
