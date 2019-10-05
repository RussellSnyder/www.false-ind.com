import React from 'react'
import Heading from "./Heading";
import Footer from "./Footer";

const Layout = ({children, siteData}) => (
        <div id="app">
            <Heading {...siteData}/>
            <div className="py-4">
                {children}
            </div>
            <Footer {...siteData}/>
        </div>
)

export default Layout
