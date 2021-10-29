import './Order.css';

import React, { useEffect } from 'react';
import { useState } from 'react';

const Order = (props) =>{

    const {address, name, date , orderStatus}= props.order;
    // const [status, setStatus] = useState('pending');

    // useEffect(() => {
    //     setStatus(orderStatus)
    // }, [orderStatus]);

    return (
        <div className="bg-dark m-3 text-light">
            <h3>{address}</h3>
            <h3>{name}</h3>
            <h3>{date}</h3>
            <h3>{orderStatus}</h3>
            <div>{props.children}</div>
        </div>
    );
};

export default Order;