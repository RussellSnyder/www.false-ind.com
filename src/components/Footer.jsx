import React from 'react';
import Row from 'react-bootstrap/Row';
import {Link} from "gatsby"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default ({title, logo, twitter, instagram, facebook, about}) => {
    return <div id="footer" className="bg-dark text-light py-4">
        <Container>
            <Row>
                <Col sm={8} className="text-sm-left text-center">
                    <div dangerouslySetInnerHTML={{__html: about}}/>
                </Col>
                <Col sm={4} className="social_footer text-center">
                    <a className="p-4" href={facebook} target="_blank">
                        <i className="fa-2x fab fa-facebook-f"/>
                    </a>
                    <a className="p-4" href={twitter} target="_blank">
                        <i className="fa-2x fab fa-twitter"/>
                    </a>
                    <a className="p-4" href={instagram} target="_blank">
                        <i className="fa-2x fab fa-instagram"/>
                    </a>
                </Col>
            </Row>
        </Container>
        <div id="russell" className="text-center p-4">
            Made by Russell with Love
        </div>
    </div>
}
