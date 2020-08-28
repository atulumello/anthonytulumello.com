import React from 'react'
import { Container, Row, Col} from 'reactstrap'

import styles from './welcome.module.scss'

import Spaceman from '../../../static/spaceman.png'

class Welcome extends React.Component {

    render() {

        return(
            <div>

                <Container>
                    <Row>
                        <Col xs={12} className="text-center" style={{color: '#fff'}}>
                            <h1>Anthony Tulumello</h1>
                        <Col xs={12} className="align-items-center">
                            <h4 className="d-inline">Junior Front-End Dev</h4>
                        </Col>
                        </Col>
                    </Row>
                </Container>

                <div className={styles.spaceman}>
                    <img src={Spaceman} alt="Spaceman Anthony"/>
                </div>
            </div>
        )

    }

}

export default Welcome