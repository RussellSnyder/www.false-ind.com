import slugify from "slugify";

function parseArtist(artist) {
    let { name } = artist.fields

    return {
        ...artist.fields,
        slug: slugify(name, {lower: true})
    }
}

module.exports = {parseArtist}
