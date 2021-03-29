import React, {Component} from "react"; 
import './Footer.css';

export default class Footer extends Component{
    
    footerLogo ={

    }

    render(){
        return(
            <footer>
                <div className="footer-logo-div">
                    <img className="footer-logo" src="/imgs/cropped-ecomnow-logo-4.png"/>
                </div>
                <p className="copyright">2020. All rights reserved. eComNow.com.</p>
            </footer>
        )
    }
}