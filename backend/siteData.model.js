'use strict';
const {parseSiteData} = require("./siteData.parser");
const {CONTENT_IDS} = require('./contentful.service')

module.exports = class ReleaseModel {
  constructor(client) {
    this.client = client;
  }

  getSiteData() {
    const {client} = this;
    return client.getEntry(CONTENT_IDS.SITE_DATA)
      .then(function (entry) {
          return parseSiteData(entry)
      })
      .catch(e => console.log(e))
  };
}
