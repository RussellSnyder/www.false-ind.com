import React from 'react';
import Image from 'react-bootstrap/Image';
import {Link} from "gatsby"
import moment from "moment";
import { navigate } from "gatsby"

export default ({title, slug, releaseDate, artist, artwork}) => (
        <div className="release-preview card" onClick={() => navigate(`release/${slug}`)}>
            <Image src={artwork.url} alt={title} fluid className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{artist.fields.name}</p>
            </div>
        </div>
)
