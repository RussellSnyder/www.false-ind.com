'use strict';
import {parseArtist} from "./artist.parser";

const {CONTENT_TYPES} = require('./contentful.service')

module.exports = class ReleaseModel {
  constructor(client) {
    this.client = client;
  }

  getAllArtists() {
    const {client} = this;

    return client.getEntries({
      content_type: CONTENT_TYPES.ARTIST,
      include: 10
    })
      .then(function (entries) {
        return client.parseEntries(entries)
      })
      .then(function (entries) {
        return entries.items.map(function (entry, i) {
          return parseArtist(entry)
        })
      })
      .catch(e => console.log(e))
  };
}
