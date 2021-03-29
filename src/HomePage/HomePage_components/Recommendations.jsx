import React, {Component} from 'react'
import './Recommendations.css'
import {Link} from 'react-router-dom'

export default class Recommendations extends Component{

    thirdImg = {
        'background-image': 'url(imgs/HomePage/20-00393_CommSci_WebGraphics_Home3-1.jpg)'
    }

    render(){

        return(
            <div className="recommedations-container">
                 <div className="recommendation-div">
                    <p className="recommendation-text recommendation-text-title">
                        Trusted Recommendations Converted into Revenue</p>
                    <p className="recommendation-text recommendation-text-title">
                        Our “Best-in-Class” tools allow the automated creation of unlimited customized eStores for the eCommerce industry. A unique, fully integrated recommendation tool empowers professionals to quickly and easily recommend the right products for improved results. Through a personalized email, customers can directly purchase the recommended products online at their own convenience.
                    </p>
                </div>
                <div className="home-page-img fixed" style={this.thirdImg}>
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
                <div className="recommendation-div">
                        <p className="recommendation-text recommendation-text-title">
                            Join Today's Online Sales Revolution... Get eCommerce Today!</p>
                        <p className="recommendation-text recommendation-text-title">Your automated and personalized eStore comes pre-loaded with inventory items from trusted and quality vendors. Now you can increase the care and support for your customers by offering a convenient way to acquire quality products that assist their general health and wellness, while increasing your revenue at the same time!</p>
                    <p className="recommendation-text recommendation-text-title">NO ORDERING, NO INVENTORY, NO INVOICING & NO HASSLES!</p>
                </div>
            </div>
        )
    }
}