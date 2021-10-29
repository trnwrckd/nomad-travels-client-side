import './ManageOrders.css';

import React, { useEffect, useState } from 'react';
import Order from '../../Shared/Order/Order';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://enigmatic-caverns-80998.herokuapp.com/orders/`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [order]);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            const url = `https://enigmatic-caverns-80998.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    const handleUpdateStatus = (id) => {
        
        const updatedOrder = { ...order, 'orderStatus': 'confirmed' };
        setOrder(updatedOrder);

        const url = `https://enigmatic-caverns-80998.herokuapp.com/orders/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setOrder(data);
                }
            })
    }

    return (
        <div className =" container mt-nav">
            <h1>Manage Orders</h1>
            <div>
                {
                    orders.map(order => <Order key={order._id} order={order}>
                        <button className="btn-danger" onClick={()=> handleDeleteOrder(order._id)}> Delete</button>
                        <button className="btn-success" onClick={()=>{handleUpdateStatus(order._id)}}> Update status</button>
                    </Order>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;