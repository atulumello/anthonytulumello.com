import React from 'react'
import Footer from '../footer'

import { useFormik } from 'formik'

import { InlineIcon } from '@iconify/react'
import sendIcon from '@iconify/icons-mdi/send'
import { FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa'

import { Container, Row, Col , Button , Form , FormGroup , Label , Input  } from 'reactstrap'

import styles from './contact.module.css'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = "My name is Anthony, whats your's?"
    }

    if (!values.email) {
        errors.email = "I'll need your email address to reply."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Well, that doesn't look like a valid email address."
    }

    if (!values.message) {
        errors.message = "Well, this is awkward. I'm speechless too."
    } else if (values.message.length > 10) {
        errors.message = "Sweet and short, but not descriptive!"
    }

    return errors
}

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            status: ''
        },
        validate,
        submitForm(ev) {
            ev.preventDefault();
            const form = ev.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
              if (xhr.readyState !== XMLHttpRequest.DONE) return;
              if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
              } else {
                this.setState({ status: "ERROR" });
              }
            };
            xhr.send(data);
          }
    })

        return(
            <div>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1 className="mb-1">Let's Connect!</h1>
                            <p>You can send me a message below or DM me on social media.</p>
                        </Col>
                        <Col xs={12} className="text-center">
                            <a className={styles.socialLink} target="_blank" rel="noreferrer"  href="https://github.com/atulumello">
                                <FaGithub />
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noreferrer"  href="https://instagram.com/anthonytulumello">
                                <FaInstagram />
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/anthonytulumello/">
                                <FaLinkedin />
                            </a>
                        </Col>
                    </Row>
                    <Form onSubmit={formik.submitForm} action={`${process.env.GATSBY_FORM_SUBMIT}`} method="POST">
                        <Row style={{maxWidth: '600px', margin: '0 auto', paddingTop: '20px'}}>
                            <Col xs={12} md={6}>
                                <FormGroup>
                                    <Label for="Name">Your Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="John Doe" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> :null }
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                                <FormGroup>
                                    <Label for="email">Email Address</Label>
                                    <Input type="email" name="email" id="email" placeholder="johndoe@gmail.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> :null }
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label for="message">Your Message</Label>
                                    <Input type='textarea' name='message' id='message' style={{height: '150px'}} value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.message && formik.errors.message ? <div className={styles.error}>{formik.errors.message}</div> :null }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <Button type="submit" className="portfolio-button mt-2" outline>
                                    <InlineIcon icon={sendIcon} style={{margin: '0 4px 3px 0', fontSize: '18px'}} />
                                    Send Message</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Footer />
            </div>
        )
    }


export default Contact