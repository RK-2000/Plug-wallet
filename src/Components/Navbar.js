import React from "react";
import "./styles/style.css";
import Account from "./Account";
class Navbar extends React.Component{
    render(){  
        return(
            <nav className="pageNavbar">
                <div className="container">
                <a className="navbarLink" href="about.html">about</a>
                <a className="navbarLink" href="#">whitepaper</a>
                <a className="navbarLink">connect to wallet</a>
                </div>
            </nav>   
            ); 
    }
} 
export default Navbar;