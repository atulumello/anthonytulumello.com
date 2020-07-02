import React from "react"

import FontAwesome from 'react-fontawesome'
import {  Container , Row , Col  } from "reactstrap"
import Seo from '../components/seo'
import Navibar from '../components/navibar'
import Footer from '../components/footer'
import CustomAlert from '../components/custom-alert'

import '../../node_modules/animate.css/animate.min.css'
import '../scss/styles.scss'

export default function Home() {
  return (
    <div>
    <Seo />
    <div id="page-container">
      <div id ="content-wrap">

        <Navibar/>
        
        <Container>
            <Row>
                <Col xs="12" className="text-center mt-4">
                  <FontAwesome className="d-inline" name="rocket" size="2x" style={{marginRight: '5px'}} />
                  <h3 className="d-inline">Simple Gatsby Bootstrap Boiler Plate</h3>
                </Col>
            </Row>
              <hr style={{maxWidth: '300px'}}/>
            <Row>
              <Col xs="12" className="text-center mt-3 mb-3">
                <h3>Plugins in use</h3>
              </Col>
              <Col xs="12" className="text-center">
              <CustomAlert name="reactstrap" url="https://reactstrap.github.io/"></CustomAlert>
              </Col>
              <Col xs="12" className="text-center"><CustomAlert name="Bootstrap" url="https://getbootstrap.com/"/></Col>
              <Col xs="12" className="text-center"><CustomAlert name="Animate.css" url="https://animate.style/"/></Col>
              <Col xs="12" className="text-center"><CustomAlert name="react-helmet" url="https://www.npmjs.com/package/react-helmet"/></Col>
              <Col xs="12" className="text-center"><CustomAlert name="react-fontawesome" url="https://www.npmjs.com/package/react-fontawesome"/></Col>
              <Col xs="12" className="text-center"><CustomAlert name="gatsby-plugin-sass" url="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass"/></Col>
              <Col xs="12" className="text-center"><CustomAlert name="gatsby-robots-txt" url="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/"/></Col>
              
            </Row>
            <Row>
              <Col className="text-center mt-3 mb-3">
                <h3>Features</h3>
              </Col>
            </Row>
            <Row>
            <Col xs="12" lg="3" className="text-center">
              <CustomAlert name="Always on Bottom Footer"/>
              </Col>
              <Col xs="12" lg="3" className="text-center">
              <CustomAlert name="Multiple Code Use Examples"/>
              </Col>
              <Col xs="12" lg="3" className="text-center">
              <CustomAlert name="Bootstrap 4 Features"/>
              </Col>
              <Col xs="12" lg="3" className="text-center">
              <CustomAlert name="Always Updated Footer"/>
              </Col>
            </Row>
        </Container>


      </div>
     </div>
    <Footer />
    </div>
  )
}
