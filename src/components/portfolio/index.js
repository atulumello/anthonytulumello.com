import React from 'react'
import { Container, Row, Col, Button, Badge } from 'reactstrap'

import { Icon , InlineIcon } from '@iconify/react'
import githubIcon from '@iconify/icons-logos/github-icon'
import webIcon from '@iconify/icons-mdi/web'
import gatsbyIcon from '@iconify/icons-logos/gatsby'
import firebaseIcon from '@iconify/icons-logos/firebase'
import bootstrapIcon from '@iconify/icons-logos/bootstrap'
import nodejsIcon from '@iconify/icons-logos/nodejs'
import sassIcon from '@iconify/icons-logos/sass'

import gtaPreview from '../../../static/gta_preview.png'



class Portfolio extends React.Component {

    constructor(props){
        super(props)

        this.project = {
            fseCalculator: {
                live: 'https://www.greatertorontofinancial.com',
                github: 'https://github.com/atulumello/fse-calculator'
            },
            photoSite: {
                live: 'https://anthonytulumello.com/photo-site'
            }
        }
        
    }

    render() {

        return(
            <div>
                <div className="slide">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} lg={6} className="text-center">
                                <img className="portfolio-img" src={gtaPreview} alt='GTA Preview' />
                                <Col xs={12}>
                                    <Button onClick={() => {window.open(this.project.fseCalculator.github, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={githubIcon} style={{margin: '0 4px 3px 0'}} />
                                        View on GitHub
                                    </Button>
                                    <Button onClick={() => {window.open(this.project.fseCalculator.live, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={webIcon} style={{margin: '0 4px 3px 0', fontSize: '18px'}} />
                                        View Live
                                    </Button>
                                </Col>
                            </Col>
                            <Col xs={12} lg={6} className="text-center text-lg-left">
                                <Row>
                                    <Col xs={12}>
                                        <h1>fse-calculator</h1>
                                    </Col>
                                    <Col xs={12}>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={gatsbyIcon} /></a>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={nodejsIcon} /></a>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={firebaseIcon} /></a>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={bootstrapIcon} /></a>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={sassIcon} /></a>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mt-2 mb-2">A simple loan calculator built for an aviation economy game. NodeJs communicates with Google Firebase in order to dynamically update available funds from the game world api.</p>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mb-2">NPM Packages Used:</p>
                                    </Col>
                                    <Col xs={12}>
                                        <Badge>reactstrap</Badge>
                                        <Badge>react-helmet</Badge>
                                        <Badge>react-robots-txt</Badge>
                                        <Badge>request</Badge>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                <Container>
                        <Row className="align-items-center">
                            <Col xs={12} lg={6} className="text-center">
                                <img className="portfolio-img" src={gtaPreview} alt='GTA Preview' />
                                <Col xs={12}>
                                    <Button onClick={() => {window.open(this.project.fseCalculator.github, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={githubIcon} style={{margin: '0 4px 3px 0'}} />
                                        View on GitHub
                                    </Button>
                                    <Button onClick={() => {window.open(this.project.fseCalculator.live, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={githubIcon} style={{margin: '0 4px 3px 0'}} />
                                        View Live
                                    </Button>
                                </Col>
                            </Col>
                            <Col xs={12} lg={6} className="text-center text-lg-left">
                                <Row>
                                    <Col xs={12}>
                                        <h1>anthonytulumello.com</h1>
                                    </Col>
                                    <Col xs={12}>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon d-inline" ><Icon icon={gatsbyIcon} /></a>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon d-inline" ><Icon icon={bootstrapIcon} /></a>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon d-inline" ><Icon icon={sassIcon} /></a>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mt-2">A simple loan calculator built for an aviation economy game. NodeJs communicates with Google Firebase in order to dynamically update available funds from the game world api.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )

    }

}

export default Portfolio