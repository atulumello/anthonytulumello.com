import React from 'react'

import { Container, Row, Col, Button, Badge } from 'reactstrap'

import { Icon , InlineIcon } from '@iconify/react'
import webIcon from '@iconify/icons-mdi/web'
import wordpressIcon from '@iconify/icons-logos/wordpress-icon'

import Preview from '../../../static/photosite_preview_2.png'

class Photosite extends React.Component {

    render() {
        return(
            <Container>
                        <Row className="align-items-center">
                            <Col xs={12} lg={6} className="text-center">
                                <img className="portfolio-img mb-4" src={Preview} alt='GTA Preview' />
                                <Col xs={12}>
                                    <Button onClick={() => {window.open(this.props.live, '_blank')}} className="portfolio-button d-inline" outline>
                                        <InlineIcon icon={webIcon} style={{margin: '0 4px 3px 0', fontSize: '18px'}} />
                                        View Live
                                    </Button>
                                </Col>
                            </Col>
                            <Col xs={12} lg={6} className="text-center text-lg-left">
                                <Row>
                                    <Col xs={12}>
                                        <h1>Photo Site</h1>
                                    </Col>
                                    <Col xs={12}>
                                        <a href="https://www.wordpress.com" target="_blank" rel="noreferrer" aria-label="Gatsby" className="portfolio-icon" ><Icon icon={wordpressIcon} /></a>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mt-2 mb-2">A gallery centered wordpress theme built for a photographer. It allows the user to easily alter key information of the site via Advanced Custom Fields and uses Gravity Forms for form handling.</p>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="mb-2">Notable Plugins Used:</p>
                                    </Col>
                                    <Col xs={12}>
                                        <Badge>Oxygen</Badge>
                                        <Badge>Advanced Custom Fields</Badge>
                                        <Badge>Gravity Forms</Badge>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
        )
    }

}

export default Photosite