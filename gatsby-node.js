const contentful = require('contentful')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

if (process.env.CONTENTFUL_ACCESS_TOKEN && process.env.CONTENTFUL_SPACE_ID) {
    console.log(".env data read")
} else {
    console.error(".env data read not read!")
}


// Create Contentful Client
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

// Give client to Models to access
const ReleaseModel = require('./backend/release.model')
const releaseModel = new ReleaseModel(client)

const SiteDataModel = require('./backend/siteData.model')
const siteDataModel = new SiteDataModel(client)

exports.createPages = async ({ actions: { createPage } }) => {

    const siteData = await siteDataModel.getSiteData()
            .catch(e => console.log(e))

    const allReleases = await releaseModel.getAllReleases()
            .catch(e => console.log(e))

    const latestReleases = allReleases.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,3)

    createPage({
        path: `/`,
        component: require.resolve("./src/templates/index.jsx"),
        context: { latestReleases, siteData },
    })

    createPage({
        path: `/releases/`,
        component: require.resolve("./src/templates/releases.jsx"),
        context: { allReleases, siteData },
    })


    allReleases.forEach(release=> {
        createPage({
            path: `/release/${release.slug}/`,
            component: require.resolve("./src/templates/release.jsx"),
            context: { ...release, siteData },
        })
    })
}
