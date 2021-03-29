import React, {Component} from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import SolutionBanner from './SolutionComponents/SolutionBanner'
import SolutionHeader from './SolutionComponents/SolutionHeader'

export default class SolutionPage extends Component{
    render(){
        return(
            <div>
                <Header />
                <Nav />
                <SolutionBanner />
                <SolutionHeader />
            </div>
        )
    }
}