import './Destination.css';

import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = (props) => {
    const { _id , destinationName, destinationLocation , costPerPerson ,  image, description } = props.destination;
    const history = useHistory();

    const redirectToDetails = (destinationID) => {
        console.log(destinationID);
        const url = `/placeorder/${destinationID}`;
        history.push(url);
    }

    return (
        <div className="col">
            <div className="h-100 p-3 d-flex align-items-center flex-column flex-lg-row service-card">
                <div>
                    <img src={image} alt=""  height="200px" width="200px"/>
                </div>
                <div className="d-flex flex-column justify-content-center ps-4">
                    <h4>{destinationName}</h4>
                    <p className="mt-2 mb-4">{destinationLocation}</p>
                    <p className="mt-2 mb-4">{description}</p>
                    <p className="mt-2 mb-4">{costPerPerson}</p>
                <div>
                    <button className="btn-generic btn-blue" onClick={ ()=>{redirectToDetails(_id)}}>
                        Book Tour
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;