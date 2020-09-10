import React from 'react'

import { Container, Row, Col, Button, Badge } from 'reactstrap'

import { Icon , InlineIcon } from '@iconify/react'
import githubIcon from '@iconify/icons-logos/github-icon'
import webIcon from '@iconify/icons-mdi/web'
import gatsbyIcon from '@iconify/icons-logos/gatsby'
import bootstrapIcon from '@iconify/icons-logos/bootstrap'
import sassIcon from '@iconify/icons-logos/sass'

import Preview from '../../../static/boiler_preview_2.png'

class Boiler extends React.Component {

    render() {
        return(
            <Container>
                        <Row className="align-items-center">
                            <Col xs={12} lg={6} className="text-center">
                                <img className="portfolio-img mb-4" src={Preview} alt='GTA Preview' />
                                <Col xs={12}>
                                    <Button onClick={() => {window.open(this.props.github, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={githubIcon} style={{margin: '0 4px 3px 0'}} />
                                        View on GitHub
                                    </Button>
                                    <Button onClick={() => {window.open(this.props.live, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={webIcon} style={{margin: '0 4px 3px 0', fontSize: '18px'}} />
                                        View Live
                                    </Button>
                                </Col>
                            </Col>
                            <Col xs={12} lg={6} className="text-center text-lg-left">
                                <Row>
                                    <Col xs={12}>
                                        <h1>gatsby-bootstrap-boiler</h1>
                                    </Col>
                                    <Col xs={12}>
                                        <a href="https://www.gatsby.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={gatsbyIcon} /></a>
                                        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={bootstrapIcon} /></a>
                                        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={sassIcon} /></a>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mt-2 mb-2">My personal Gatsby Bootstrap boiler plate that I use in majority of my Gatsby based projects, including my personal site. I integrated with TravisCI to ensure all updates and builds pass without issue. Additionally, I am using Vercel to host the live preview at no cost.</p>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mb-2">NPM Packages Used:</p>
                                    </Col>
                                    <Col xs={12}>
                                        <Badge>reactstrap</Badge>
                                        <Badge>react-helmet</Badge>
                                        <Badge>react-fontawesome</Badge>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
        )
    }

}

export default Boiler