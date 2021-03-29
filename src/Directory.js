import './Directory.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUsPage/AboutUsPage';
import OurSolution from './SolutionPage/SolutionPage';
import FAQ from './FAQPage/FAQPage';
import ContactUs from './ContactPage/ContactPage';
import EmailMarketing from './SolutionPage/EmailMarketing'
import RecommendationEngine from './SolutionPage/RecommendationEngine'

function Directory() {
  return (
    <div className="Directory">
       <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutus/">
            <AboutUs />
          </Route>
          <Route  path="/automated-estore">
            <OurSolution />
          </Route>
          <Route exact path="/recommendation-engine">
            <RecommendationEngine />
          </Route>
          <Route exact path="/email-marketing-module">
            <EmailMarketing />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default Directory;
