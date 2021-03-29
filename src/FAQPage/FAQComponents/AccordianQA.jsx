import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

export default class AccordianQA extends Component {
    render() {
        return (
            <div className="container">
                <Accordion >
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="faq-header" eventKey="0">
                        <h4>How do I recommend products to my customers? </h4>
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>During the initial setup process, you identify products to be automatically recommended for
your customers. When using the recommendation interface, these products will automatically
populate. Product recommendations can always be created and/ or adjusted at any time.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="faq-header" eventKey="1">
                        <h4>How does a new customers information get entered into the recommendation module? </h4>
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>You can enter the customers basic contact information in the recommendation module. This
takes seconds to complete.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}