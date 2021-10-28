import React from 'react';
import Banner from './Banner/Banner';
import Destinations from '../Destinations/Destinations'
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Sponsors from './Sponsors/Sponsors';

import './Home.css'
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            {/* <Blogs></Blogs>
            <Sponsors></Sponsors>
            <About></About> */}
        </div>
    );
};

export default Home;