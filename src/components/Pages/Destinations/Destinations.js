import './Destinations.css';
import React from 'react';
import Destination from './Destination/Destination';
import { useDestinations } from '../../../hooks/useDestinations';

const Services = () => {
    
    const [destinations] = useDestinations();
    
    return (
        <div className="my-5">
            <h1 className="mb-4">Places to visit</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gy-3">
                    {
                        destinations.map(destination =><Destination key={destination._id} destination={destination}/>)
                    }        
                </div>
            </div>
        </div>
    );
};

export default Services;