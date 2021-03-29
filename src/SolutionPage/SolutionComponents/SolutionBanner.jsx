import React, { Component } from 'react'

export default class SolutionBanner extends Component {
    solutionImg = {
        'background-image': 'url(imgs/SolutionPage/20-00393_CommSci_WebGraphics_AutomatedEStore-2.jpg)'
    }
    render() {
        return (
            <div>
                <div className="home-page-img fixed" style={this.solutionImg}>
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