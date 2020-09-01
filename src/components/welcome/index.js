import React from 'react'
import { Container, Row, Col , Button } from 'reactstrap'
import { InlineIcon } from '@iconify/react'
import githubIcon from '@iconify/icons-logos/github-icon'


class Welcome extends React.Component {

    goToGit(){
        const url = 'https://github.com/atulumello'
        window.open(url, '_blank')
    }

    render() {

        return(
            <div>
                <Container>
                    <Row>
                        <Col xs={12} className="text-center" style={{color: '#fff'}}>
                            <h1 className="mb-3" style={{fontSize: '64px', fontWeight: '800'}}>Anthony Tulumello</h1>
                        </Col>
                        <Col xs={12} className="text-center">
                            <p className="mb-3" style={{fontSize: '25px', maxWidth: '800px', margin: '0 auto', color: '#fff'}}>I'm a Canadian front-end focused web developer with a wide array of knowledge in different stacks, both front and back.</p>
                        </Col>
                        <Col xs={12} className="text-center">
                            <Button onClick={this.goToGit} className="gitButton">
                                    <InlineIcon icon={githubIcon} style={{margin: '0 4px 3px 0'}} />
                                    View my GitHub
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}

export default Welcome