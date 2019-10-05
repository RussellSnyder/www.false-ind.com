'use strict';
const {CONTENT_TYPES} = require('./contentful.service')
const {parseRelease} = require('./release.parser')

module.exports = class ReleaseModel {
  constructor(client) {
    this.client = client;
  }

  getAllReleases() {
    const {client} = this;

    return client.getEntries({
      content_type: CONTENT_TYPES.RELEASE,
      include: 10
    })
      .then(function (entries) {

        return client.parseEntries(entries)
      })
      .then(function (entries) {
        return entries.items.map(function (entry, i) {
          return parseRelease(entry)
        })
      })
      .catch(e => console.log(e))
  };
}
