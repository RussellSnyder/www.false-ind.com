import React from 'react'
import Layout from '../components/Layout'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReleasePreview from "../components/ReleasePreview";
import {Link} from "@reach/router";

export default class Home extends React.Component {
    render() {
        const {latestReleases, siteData} = this.props.pageContext

        const { title } = siteData

        return (
                <Layout siteData={siteData}>
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <h2 className="pb-4">// Latest Releases</h2>
                            </Col>
                            <Col sm={8}>
                                <h2 className="text-right">
                                    <Link to="/releases">// All Releases</Link>
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            {latestReleases.map(release => (
                                    <Col sm={4}>
                                        <ReleasePreview {...release}/>
                                    </Col>
                            ))}
                        </Row>
                    </Container>
                </Layout>
        )
    }
}
