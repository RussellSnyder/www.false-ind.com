const {parseImage} = require('./contentful.parser');
const {documentToHtmlString} = require('@contentful/rich-text-html-renderer');

function parseSiteData(release) {
    let {about, logo} = release.fields

    return {
        ...release.fields,
        logo: parseImage(logo),
        about: documentToHtmlString(about),
    }
}

module.exports = {parseSiteData}
