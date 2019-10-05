import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";
import moment from "moment";

export default class Release extends React.Component {
  render() {
    const { title, bandcampEmbed, releaseDate, artist, artwork, description, siteData } = this.props.pageContext

    return (
      <Layout className="release" siteData={siteData}>
          <Container fluid>
            <Row>
                <Col xs={12}>
                    <h2>{artist.fields.name}</h2>
                    <h3>{title}</h3>
                </Col>
            </Row>
          </Container>
          <Container>
              <Row>
                  <Col md={4}>
                    <Image fluid src={artwork.url} alt={artwork.title} />
                  </Col>
                  <Col md={8}>
                      <div className="bandcamp-embed mb-2" dangerouslySetInnerHTML={{ __html: bandcampEmbed }}/>
                      <span className="release-date mb-1">Released: {moment(releaseDate).format("MMM YYYY")}</span>
                      <div className={"description"} dangerouslySetInnerHTML={{ __html: description}}/>
                  </Col>
              </Row>
          </Container>
      </Layout>
    );
  }
}
