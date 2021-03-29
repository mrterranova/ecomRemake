import React, {Component} from 'react'


export default class AboutIntro extends Component{

    firstImg = {
        'background-image': 'url(imgs/AboutPage/20-00393_CommSci_WebGraphics_About.jpg)',
    }
    render(){
        return(
            <div> 
                <div className="home-page-img fixed" style={this.firstImg}>
                    <div className="about-img-text-div">
                            <p className="about-heading">
                                eComNow
                            </p>
                            <p className="about-subheading">      
                                Automated eCommerce Solution
                            </p>
                        </div>
                    <div className="transparent-div"></div>
                </div>
            </div>
        )
    }
}