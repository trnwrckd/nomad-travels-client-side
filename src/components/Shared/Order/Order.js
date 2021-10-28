import './Order.css';

import React from 'react';

const Order = (props) =>{

    const {address, name, date}= props.order;
    
    return (
        <div className="bg-dark m-3 text-light">
            <h3>{address}</h3>
            <h3>{name}</h3>
            <h3>{date}</h3>
        </div>
    );
};

export default Order;