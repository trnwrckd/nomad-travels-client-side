import './PlaceOrder.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'; 
import { useAuth } from '../../../hooks/useAuth';
import { useParams } from 'react-router';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {

    const { user } = useAuth();

    const { handleSubmit, register, formState: { errors } ,reset} = useForm();

    const {id } = useParams();
    
    const [destination, setDestination] = useState([]);
    const [persons, setPersons] = useState(1);


    const handleChangePersons = (add,e) => {
        e.preventDefault();
        let newPersons;
        if (!add && persons <= 1) {
            newPersons = 0;
        }
        else if (add) {
            newPersons = persons + 1;
        }
        else {
            newPersons = persons - 1;
        }
        setPersons(newPersons)
    }

    
    useEffect(() => {
        fetch(`https://enigmatic-caverns-80998.herokuapp.com/destinations/${id}`)
            .then(res => res.json()).then(data => setDestination(data));
    }, [id]);

    const notify = () => toast("Order placed Successfully!");

    const onSubmit = (data) => {
        data.name = user.displayName;
        data.email = user.email;
        data.location = destination.destinationName;
        data.uid = user.uid;
        data.persons = persons;
        data.orderStatus = "Pending";

        axios.post('https://enigmatic-caverns-80998.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    notify();
                    reset();
                    setPersons(1);
                }
            })
    }

    return (
        <div className=" placeorder-bg py-5  mt-nav">
            <div className="container p-5">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col order-md-2">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="img-parent">
                                <img src={destination.image} alt="" className="placeorder-img img-fluid " height="300px" width="450px"/>
                                <div className="dest-info p-3">
                                    <h2> {destination.destinationName}</h2>
                                    <h4>
                                        <i className="fas fa-map-marker-alt me-2"></i>
                                        {destination.destinationLocation}
                                    </h4>
                                    <h4>
                                        <i className="fas fa-dollar-sign me-2"></i>
                                        {destination.costPerPerson} per person
                                    </h4>
                                    <h4>
                                        <Rating
                                            initialRating={destination.rating}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly>
                                         </Rating>   
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col order-md-1">
                        <h2>Book Tour</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                            <ToastContainer/>
                            {/* name */}
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" defaultValue={user.displayName} type="text" placeholder="Name" id="name" {...register("name")} />
                                <label htmlFor="name">Name</label>
                            </div>

                            {/* email */}
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" defaultValue={user.email} type="email" placeholder="Email" id="email" {...register("email")} />
                                <label htmlFor="email">Email</label>
                            </div>

                            {/* address */}
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" type="text" placeholder="Address" id="address" {...register("address", { required: "Address is required" })} />
                                <label htmlFor="address">Address</label>
                                {errors.address && <p className="text-danger fw-bold m-0"> {errors.address.message}</p>}
                            </div>

                            {/* Date */}
                            <div className="mb-2 d-flex flex-column flex-lg-row justify-content-evenly align-items-center">
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" type="date" placeholder="Date" id="date" {...register("date", { required: "Date is required" })} />
                                <label htmlFor="date">Date</label>
                                {errors.date && <p className="text-danger fw-bold m-0"> {errors.date.message}</p>}
                            </div>
                                {/* <input type="date"  {...register("date", {required: "Date is required"})} />
                                {errors.date && <p className="text-danger fw-bold m-0"> {errors.date.message}</p>} */}
                                    
                                <div className="d-flex align-items-center  mt-2 mt-lg-0">
                                    <button id="inc-btn" onClick={(e)=>handleChangePersons(0,e)}>-</button>
                                    <span id="persons">{persons}</span>
                                    <button id="dec-btn" onClick={(e)=>handleChangePersons(1,e)}>+</button>
                                </div>

                            </div>


                            <input type="hidden" {...register("location")} />
                            <input type="hidden" {...register("orderStatus")} />
                            <input type="hidden" {...register("uid")} />
                            <input type="hidden" {...register("persons")} />

                            <div className="mt-3"><button className="btn-generic btn-blue">
                                    Proceed
                                </button>
                            </div>

                        </form>
                    </div>         
                </div>
                <div className="pt-3">
                    <h3>{destination.destinationName}</h3>
                    <p>{destination.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;