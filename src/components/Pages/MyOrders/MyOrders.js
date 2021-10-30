import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Order from '../../Shared/Order/Order';
import Loader from '../../Shared/Loader/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://enigmatic-caverns-80998.herokuapp.com/orders/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoaded(true);
            });
    }, [user.uid]);

    const delNotify = () => toast("Order Deleted.");

    const handleDeleteOrder = (id) => {
         
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
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
    
    if (!loaded) return <Loader />
    else {
        if (orders.length === 0) {
            return (
                <div className="common-bg">
                    <div className="mt-nav container py-5 mt-5">
                        <h2 className="py-5 my-5">No Current Orders</h2>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className=" mt-nav  common-bg py-5 mt-5">
                    <div className="container ">
                        <h2>{user.displayName}, Here are all your orders.</h2>
                        <ToastContainer/>
                        <div className="container">
                            <div className="py-2 my-2 row row-cols-1 row-cols-md-2 g-5">
                            {
                                orders.map(order => <Order key={order._id} order={order}>
                                    <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>
                                        Delete
                                        <i className="fas fa-trash-alt ms-1"></i>
                                    </button>
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

export default MyOrders;