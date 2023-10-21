import React from 'react'
import Navbar from './navbar/Navbar'
import FeaturedProperties from './featuredProperties/FeaturedProperties'
import Newsletter from './newsletter/Newsletter'
import Footer from './footer/Footer'

const PropertiesN = () => {
    return (
        <div>
            <Navbar />
            <FeaturedProperties />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default PropertiesN
