import React from "react"

//import FontAwesome from 'react-fontawesome'
import {  Container , Row , Col  } from "reactstrap"
import Seo from '../components/seo'
import Navibar from '../components/navibar'
import Footer from '../components/footer'

import { Icon, InlineIcon } from "@iconify/react"

import reactIcon from '@iconify/icons-simple-icons/react'
import sassIcon from '@iconify/icons-simple-icons/sass'
import adobephotoshopIcon from '@iconify/icons-simple-icons/adobephotoshop'
import githubIcon from '@iconify/icons-simple-icons/github'
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby'
//import visualstudioIcon from '@iconify/icons-simple-icons/visualstudio'
import wordpressIcon from '@iconify/icons-simple-icons/wordpress'
import gulpIcon from '@iconify/icons-simple-icons/gulp'
import mysqlIcon from '@iconify/icons-simple-icons/mysql'
import bootstrapIcon from '@iconify/icons-simple-icons/bootstrap'

import myFace from '../img/headshot_min.jpg'


import '../../node_modules/animate.css/animate.min.css'
import '../scss/styles.scss'

export default function Home() {
  return (
    <div>
    <Seo />
    <div id="page-container">
      <div id ="content-wrap">

        <Navibar/>
        
        <Container style={{position: 'absolute', width: '100%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
            <Row>
              <Col xs="12" className="text-center mb-1">
                <img src={myFace} alt="My Face" style={{filter: 'grayscale(20%)', width: '180px', borderRadius: '50%', border: '3px solid #000'}}/>
              </Col>
              <Col xs="12" className="text-center">
                <h2>Anthony Tulumello</h2>
              </Col>
              <Col xs="12" className="text-center">
                <h5>Front-End Developer</h5>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col xs="12" className="text-center">
                <InlineIcon icon={reactIcon} width="20" style={{margin: '0 5px'}}/>
                <InlineIcon icon={sassIcon} width="20" style={{margin: '0 5px'}}/>
                <InlineIcon icon={adobephotoshopIcon} width="20" style={{margin: '0 5px'}}/>
                <InlineIcon icon={mysqlIcon} width="20" style={{margin: '0 5px'}}/>
                <InlineIcon icon={gatsbyIcon} width="20" style={{margin: '0 5px'}}/>
              </Col>
              <Col xs="12" className="text-center">
                <InlineIcon icon={bootstrapIcon} width="20" style={{margin: '0 5px'}}/>
                <InlineIcon icon={gulpIcon} width="20" style={{margin: '0 5px'}}/>
                <InlineIcon icon={wordpressIcon} width="20" style={{margin: '0 5px'}}/>
              </Col>
              <Col xs="12" className="text-center">
                <InlineIcon icon={githubIcon} width="20" style={{margin: '0 5px'}}/>
              </Col>
            </Row>
        </Container>


      </div>
     </div>
    <Footer />
    </div>
  )
}
