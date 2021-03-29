import React, {Component} from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Banner from './FAQComponents/Banner'
import FAQParagraphs from './FAQComponents/FAQParagraphs'
import AccordianQA from './FAQComponents/AccordianQA'

export default class FAQPage extends Component{
    render(){
        return(
            <div>
                <Header />
                <Nav />
                <Banner />
                <FAQParagraphs />
                <AccordianQA />
                <Nav />
                <Footer />
            </div>
        )
    }
}