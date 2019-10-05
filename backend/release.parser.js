const {parseImage} = require('./contentful.parser');

const {CONTENT_TYPES} = require('./contentful.service');

const {documentToHtmlString} = require('@contentful/rich-text-html-renderer');
const slugify = require('slugify');

function parseRelease(release) {
    let {title, description, artwork} = release.fields

    return {
        ...release.fields,
        slug: slugify(title),
        artwork: parseImage(artwork),
        description: documentToHtmlString(description),
    }
}

module.exports = {parseRelease}
