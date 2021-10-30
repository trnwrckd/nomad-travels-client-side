import './ManageOrders.css';

import React, { useEffect, useState } from 'react';
import Order from '../../Shared/Order/Order';
import Loader from '../../Shared/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://enigmatic-caverns-80998.herokuapp.com/orders/`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoaded(true);
            });
    }, [order]);

    // notification for update and delete
    const delNotify = () => toast("Order Deleted.");
    const updateNotify = () => toast("Order Approved!");

    // delete order
    const handleDeleteOrder = (id) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure?',
            buttons: [
            {
                label: 'Yes',
                    onClick: () => {
                    const url = `https://enigmatic-caverns-80998.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        delNotify();
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
                }
            },
            {
                label: 'No',
            }
            ]
        });
    }

    // update order status
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
                    updateNotify();
                    setOrder(data);
                }
            })
    }

    if (!loaded) return <Loader />
    else {
        if (orders.length === 0) {
            return (
                <div className="mt-nav container py-5 mt-5">
                    <h2 className="py-5 my-5">No Current Orders</h2>
                </div>
            );
        }

        else {
            return (
                <div className="common-bg">
                    <div className ="container mt-nav py-5 mt-5">
                        <h1>Manage Orders</h1>
                        <ToastContainer/>
                        <div className="container">
                            <div className="py-2 my-2 row row-cols-1 row-cols-md-2 g-5">
                            {
                                    orders.map(order =>
                                        <Order key={order._id} order={order}>
                                            <div className="d-flex justify-content-evenly">
                                                <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}> Delete
                                                    <i className="fas fa-trash-alt ms-1"></i>
                                                </button>
                                                {
                                                    order.orderStatus === "Approved" || 
                                                <button className="btn btn-success ms-2" onClick={()=>{handleUpdateStatus(order._id)}}> 
                                                    Update status
                                                    <i className="far fa-check-circle ms-1"></i>
                                                </button> 
                                                }
                                            </div>
                                         </Order>)
                            }
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default ManageOrders;