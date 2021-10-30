import React from 'react';
import Banner from './Banner/Banner';
import Destinations from '../Destinations/Destinations'


import './Home.css'
import Reviews from './Reviews/Reviews';
import DownloadApp from './DownloadApp/DownloadApp';
import Newsletter from './Newsletter/Newsletter';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <DownloadApp></DownloadApp>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;