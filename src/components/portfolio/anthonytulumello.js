import React from 'react'
import { Container, Row, Col, Button, Badge } from 'reactstrap'
import { Icon , InlineIcon } from '@iconify/react'
import githubIcon from '@iconify/icons-logos/github-icon'
import gatsbyIcon from '@iconify/icons-logos/gatsby'
import bootstrapIcon from '@iconify/icons-logos/bootstrap'
import sassIcon from '@iconify/icons-logos/sass'

import gtaPreview from '../../../static/gta_preview.png'

class Anthonytulumello extends React.Component {
    render() {
        return (
            <Container>
                        <Row className="align-items-center">
                            <Col xs={12} lg={6} className="text-center">
                                <img className="portfolio-img" src={gtaPreview} alt='GTA Preview' />
                                <Col xs={12}>
                                    <Button onClick={() => {window.open(this.props.github, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={githubIcon} style={{margin: '0 4px 3px 0'}} />
                                        View on GitHub
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
                                        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon d-inline" ><Icon icon={bootstrapIcon} /></a>
                                        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon d-inline" ><Icon icon={sassIcon} /></a>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mt-2">My personal website you are viewing now, wrapped with fullpagejs. My goal was to show some of my knowledge while being as simple as possible.</p>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mb-2">NPM Packages Used:</p>
                                    </Col>
                                    <Col xs={12}>
                                        <Badge>fullpagejs</Badge>
                                        <Badge>reactstrap</Badge>
                                        <Badge>react-helmet</Badge>
                                        <Badge>react-robots-txt</Badge>
                                        <Badge>iconify/react</Badge>
                                        <Badge>Formik</Badge>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
        )
    }
}

export default Anthonytulumello