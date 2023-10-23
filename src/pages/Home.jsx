import React from 'react'
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Product from '../components/Product';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <Product />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home