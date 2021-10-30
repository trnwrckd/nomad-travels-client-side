import './Destinations.css';
import React from 'react';
import Destination from './Destination/Destination';
import { useDestinations } from '../../../hooks/useDestinations';
import Loader from '../../Shared/Loader/Loader';

const Services = () => {
    
    const [destinations] = useDestinations();
    if (destinations.length === 0) {
        return (<Loader></Loader>)
    }
    else {
        return (
            <div className="my-5">
                <h1 className="pb-5">Most Popular Packages</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            destinations.map(destination =><Destination key={destination._id} destination={destination}/>)
                        }        
                    </div>
                </div>
            </div>
        );
    }
};

export default Services;