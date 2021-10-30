import './DownloadApp.css';
import React from 'react';
import appImage from './app-images/app.png'
import appleStore from './app-images/apple-store.png'
import playStore from './app-images/play-store.png'

const DownloadApp = () => {
    return (
        <div className="download-app-container pt-5">
            <div className="container d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-md-2 g-3 pt-5">

                    <div className="col order-md-2 d-flex flex-column justify-content-center">
                        <div className="px-3 py-4 promo-text-container">
                                <h3>Plan on the go with our free travel app</h3>
                                <p className="lead">With NomadTravel's mobile travel planner on Android and iOS, access and edit your trips wherever you go — even while offline.</p>
                                <div className="d-flex justify-content-center" >
                                    <img src={appleStore} className="ad-img" alt=""  />
                                    <img src={playStore} className=" ms-2 ad-img" alt="" />
                                </div>
                            </div>
                    </div>
                    <div className="col order-md-1">
                        <img src={appImage} className="img-fluid app-img" alt=""  />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DownloadApp;