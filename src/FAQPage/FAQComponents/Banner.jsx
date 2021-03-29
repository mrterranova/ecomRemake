import React, { Component } from 'react'
import '../FAQ.css'

export default class Banner extends Component {
    faqImg = {
        'background-image': 'url(imgs/FAQPage/20-00393_CommSci_WebGraphics_FAQ.jpg)',
    }
    render() {
        return (
            <div>
                    <div className="home-page-img fixed" style={this.faqImg}>
                        <div className="about-img-text-div">
                            <p className="about-heading">
                            Frequently Asked Questions
                            </p>
                            <p className="about-subheading">
                                So Many Questions...So Many Answers!
                            </p>
                        </div>
                        <div className="transparent-div"></div>
                    </div>
            </div>
        )
    }
}