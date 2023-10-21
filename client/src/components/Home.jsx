import React from 'react'

import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import PopularProperties from './popularProperties/PopularProperties'
import FeaturedProperties from './featuredProperties/FeaturedProperties'
import Newsletter from './newsletter/Newsletter'
import Footer from './footer/Footer'

const Home = () => {
    return (
        <div>
            <>
                <Navbar />
                <Hero />
                <PopularProperties />
                <FeaturedProperties />
                <Newsletter />
                <Footer />
            </>
        </div>
    )
}

export default Home
