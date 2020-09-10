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
                  <a className="footer-anchor" target="_blank" rel="noreferrer" href="https://github.com/atulumello">
                    <FaGithub />
                  </a>
                  <a className="footer-anchor" target="_blank" rel="noreferrer"  href="https://instagram.com/anthonytulumello">
                    <FaInstagram />
                  </a>
                  <a className="footer-anchor" target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/anthonytulumello/">
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