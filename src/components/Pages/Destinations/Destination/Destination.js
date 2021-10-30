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
            <div className="h-100 d-flex align-items-center flex-column destination-card">
                <div>
                    <img src={image} alt="" className="img-fluid dest-img" height="250px"/>
                </div>
                <div className="d-flex flex-column justify-content-between bg-highlight p-3">
                    <h4 className="py-0">{destinationName}</h4>
                    <p className="mt-2">{destinationLocation}</p>
                    <p className="mt-2">{description.substring(0,150)}...</p>
                    <p className="mt-2">${costPerPerson} per person</p>
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