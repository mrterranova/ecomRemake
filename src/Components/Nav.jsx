import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

export default class Nav extends Component {
    state={
        display: "none"
    }

    displayDiv=()=>{
        this.setState({
            display:"block"
        })
    }

    noDisplayDiv=()=>{
        this.setState({
            display:"none"
        })
    }
    render() {
        
        return (
            <div className="container-fluid nav-container">
                <Link to={"/"}>
                    <button className="nav-btn">Home</button>
                </Link>
                <Link to={"/aboutus"}>
                    <button className="nav-btn">About Us</button>
                </Link>
                <Link to={"/automated-estore"} >
                    <button className="nav-btn solution-nav" onMouseEnter={()=>this.displayDiv()} onMouseLeave={()=>this.noDisplayDiv()}>Our Solution</button>
                    <div className="solution-dropdown" onMouseEnter={() =>this.displayDiv()} onMouseLeave={()=>this.noDisplayDiv()} style={{display:this.state.display}}>
                        <Link id="sol-btn" to={"/automated-estore"}>
                            <span>Automated eStore</span>
                        </Link>
                        <hr />
                        <Link id="sol-btn" to={"/recommendation-engine"}>
                            <span>Recommendation Engine</span>
                        </Link>
                        <hr />
                        <Link id="sol-btn" to={"/email-marketing-module"}>
                            <span>Email Marketing Module</span>
                        </Link>
                    </div>
                </Link>
                <Link to={"/faq"}>
                    <button className="nav-btn">FAQ</button>
                </Link>
                <Link to={"/contact-us"}>
                    <button className="nav-btn">Contact Us</button>
                </Link>
            </div>
        )
    }
}