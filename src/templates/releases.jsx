import React from 'react'
import Layout from '../components/Layout'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReleasePreview from "../components/ReleasePreview";

export default class Releases extends React.Component {
    render() {
        const {allReleases, siteData} = this.props.pageContext

        return (
                <Layout siteData={siteData}>
                    <Container>
                        <h2 className="pb-4">Releases</h2>
                        <Row>
                            {allReleases.map(release => (
                                    <Col sm={4} className="mb-4">
                                        <ReleasePreview {...release}/>
                                    </Col>
                            ))}
                        </Row>
                    </Container>
                </Layout>
        )
    }
}
