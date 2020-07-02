import React from "react"
import {  Container , Row , Col } from "reactstrap"

let date = new Date().getFullYear();

export default function Footer() {
  return (
      <div className="mt-4" id="footer">
        <Container>
            <Row>
                <Col className="text-center">
                    <p className="text-muted" style={{margin: '0', fontSize: '13px'}}>&copy;{date} Anthony Tulumello &bull; Built with &#10084;&#65039; &amp; GatsbyJS</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}