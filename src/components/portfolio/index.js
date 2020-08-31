import React from 'react'
import { Container, Row, Col} from 'reactstrap'



class Portfolio extends React.Component {

    render() {

        return(
            <div>
                <Container>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1 className="mb-3" style={{fontSize: '64px', fontWeight: '800'}}>Anthony Tulumello</h1>
                        </Col>
                        <Col xs={12} className="text-center">
                            <p style={{fontSize: '25px', maxWidth: '800px', margin: '0 auto'}}>I'm a Canadian front-end focused web developer with a wide array of knowledge in different stacks, both front and back.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}

export default Portfolio