import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaInstagramSquare,FaLinkedin,FaGithubSquare} from "react-icons/fa"

const Contact = () => {
    return (
        <div className="contactme  p-5 mt-5 mb-4 rounded-3">
            <h1>Connect with me</h1>
            <Row>
                <Col>
                <Row>
                    <Col>
                    <p>Location : <span style={{ color: '#F7D716' }}><i>India</i></span></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>Email :<span style={{ color: '#F7D716' }}><i> sparshpathak2002@gmail.com</i></span></p>
                    </Col>
                </Row>

                </Col>
                <Col>
                    <p style={{"margin-bottom":" 0px"}}>Follow </p>
                    <p className="m-l">
                        <span><a className="social-media-links" href='https://www.instagram.com/sparsh_pathak2002/'><FaInstagramSquare/></a></span>
                        <span ><a className="social-media-links" href='https://www.linkedin.com/in/sparsh-pathak-3b2386225/'><FaLinkedin/></a></span>
                        <span><a className="social-media-links" href='https://github.com/SPARSHpathak2002'><FaGithubSquare/></a></span>
                    </p>
                </Col>
            </Row>
        </div>
    )
}
export default Contact;