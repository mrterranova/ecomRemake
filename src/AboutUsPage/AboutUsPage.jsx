import React, { Component } from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import AboutIntro from './AboutUs_components/AboutIntro'
import AboutHeader from './AboutUs_components/AboutHeader'
import AboutImg1 from './AboutUs_components/AboutImg1'
import AboutList1 from './AboutUs_components/AboutList1'
import AboutMid from './AboutUs_components/AboutMid'
import AboutList2 from './AboutUs_components/AboutList2'
import AboutImg2 from './AboutUs_components/AboutImg2'
import AboutFinal from './AboutUs_components/AboutFinal'
import './AboutUsPage.css'

export default class AboutUsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <AboutIntro />
                <AboutHeader />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 overflow">
                            <AboutImg1 />
                        </div>
                        <div className="col-md-6">
                            <AboutList1 />
                        </div>
                    </div>
                    <AboutMid />
                    <div className="row">
                        <div className="col-md-6">
                            <AboutList2 />
                        </div>
                        <div className="col-md-6 overflow">
                            <AboutImg2 />
                        </div>
                    </div>
                </div>
                <AboutFinal />
                <Nav />
                <Footer />
            </div>
        )
    }
}