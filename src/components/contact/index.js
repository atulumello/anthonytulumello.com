import React from 'react'
import Footer from '../footer'

import { Container, Row, Col , Button } from 'reactstrap'

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <p>One</p>
                        </Col>
                        <Col lg={6}>
                            <p>Two</p>
                        </Col>
                    </Row>
                </Container>
                
                <svg style={{position: 'absolute', bottom: '0', width: '100%', height: '100px', fill:"#fafafa", transform: "scaleY(-1)"}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
                </svg>
                <Footer />
            </div>
        )
    }
}

export default Contact