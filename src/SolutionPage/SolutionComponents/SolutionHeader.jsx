import React, { Component } from 'react'
import '../Solution.css'

export default class SolutionHeader extends Component {
    solutionImg = {
        'background-image': 'url(imgs/SolutionPage/20-00393_CommSci_WebGraphics_AutomatedEStore-2.jpg)'
    }
    render() {
        return (
            <div>
               <div className="solutions-header">
                <h4 className="header-text">Join the modern online sales revolution!</h4>
               </div>
            </div>
        )
    }
}