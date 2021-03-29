import React, {Component} from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Information from './HomePage_components/Information'
import Recommendations from './HomePage_components/Recommendations'

export default class HomePage extends Component{
    render(){
        return(
            <div>
                <Header />
                <Nav />
                <Information />
                <Recommendations />
                <Nav />
                <Footer />
            </div>
        )
    }
}