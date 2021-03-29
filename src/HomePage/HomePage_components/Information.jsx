import React, {Component} from "react"; 
import './Information.css'
import {Link} from 'react-router-dom'

export default class Information extends Component{

    firstImg = {
        'background-image': 'url(imgs/HomePage/20-00393_CommSci_WebGraphics_Home.jpg)',
    }

    secondImg= {
        'background-image': 'url(imgs/HomePage/20-00393_CommSci_WebGraphics_Home2-1.jpg)',
    }

    render(){
        return(
            <div className="information-container">
                    <div className="home-page-img fixed" style={this.firstImg}>  
                        <div className="information-img-text-div">
                            <div className="info-div1-heading div1">
                                Automated eCommerce Technology
                            </div>
                            <div className="info-div1-subheading div1">
                                A Solution Connecting Companies to Customers
                            </div>
                            <Link id="learn-more-btn" to={'/aboutus'}>
                                <span>LEARN MORE</span>
                            </Link>
                        </div>   
                        <div className="transparent-div"></div>
                    </div>
                    <div className="information-div">
                        <p className="information-text information-text-title">
                            Tired of Being Left Behind?
                        </p>
                        <p className="information-text information-text-subtitle">
                            eComNow Technology Brings You an Automated, Instant eCommerce Solution
                        </p>
                        <p className="information-text">
                            The eComNow platform creates a direct connection between professionals and customers for online product purchases. Trusted recommendations bring high conversion to purchase of quality products and their subsequent use. The results are a more positive outcome for the customer, while providing additional sources of revenue for the eStore owner
                        </p>
                    </div>
                    <div className="home-page-img fixed" style={this.secondImg}>
                        <div className="information-img-text-div">
                            <p className="info-div2-heading">
                                Best in Class eCommerce Tools For The eCommerce Industry
                            </p>
                            <p className="info-div2-heading">      
                                Creating New Opportunities for Increased Revenue
                            </p>
                            <Link id="learn-more-btn" to={'/aboutus'}>
                                <span>LEARN MORE</span>
                            </Link>
                        </div>
                        <div className="transparent-div"></div>
                    </div>            
            </div>
        )
    }
}