import React from "react"
import {  Container , Row , Col } from "reactstrap"
import { FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa'



class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.date = new Date().getFullYear()
  }

  render() {

    return(
      <div className="mt-4" id="footer" style={{position: 'absolute', bottom: '0', left: '0', width: '100%'}}>
        <Container>
            <Row>
                <Col xs={12} className="text-center">
                  <p style={{margin: '0', fontSize: '13px'}}>&copy;{this.date} Anthony Tulumello</p>
                </Col>
                <Col xs={12} className="text-center">
                  <a className="footer-anchor" href="https://github.com/atulumello">
                    <FaGithub />
                  </a>
                  <a className="footer-anchor" href="https://instagram.com/atulumello">
                    <FaInstagram />
                  </a>
                  <a className="footer-anchor" href="https://linkedin.com/atulumello">
                    <FaLinkedin />
                  </a>
                </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

export default Footer