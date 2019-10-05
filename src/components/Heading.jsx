import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {Link} from "gatsby"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default ({logo, twitter, instagram, facebook}) => {
    return <div id="heading">
        <div className="social bg-grey">
            <Container>
                <Row>
                    <Col xs={12} className="social_header text-right">
                        <a className="social" href={facebook} target="_blank">
                            <i className="fa-2x fab fa-facebook-f"/>
                        </a>
                        <a className="social" href={twitter} target="_blank">
                            <i className="fa-2x fab fa-twitter"/>
                        </a>
                        <a className="social" href={instagram} target="_blank">
                            <i className="fa-2x fab fa-instagram"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Container>
                <Link to="/" className="navbar-brand">
                    <Image src={logo.url} alt={logo.title}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#false-navbar"
                        aria-controls="false-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="false-navbar">
                    <ul className="navbar-nav ml-auto mt-3 mt-sm-0">
                        <li className="nav-item">
                            <Link activeClassName="active" to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" to="/releases" className="nav-link">Releases</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    </div>
}
