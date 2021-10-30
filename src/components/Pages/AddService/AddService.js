import './AddService.css';

import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form'; 

const AddService = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);

        axios.post('https://enigmatic-caverns-80998.herokuapp.com/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="common-bg">
            <div className="mt-nav container py-5">
                <h2> Add Service</h2>

                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-group">

                    {/* destination Name */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="text" placeholder="Destination Name" id="dest-name" {...register("destinationName", { required: "Name is required" })} />
                        <label htmlFor="dest-name">Destination Name</label>
                        {errors.destinationName && <p className="text-danger fw-bold m-0">{errors.destinationName.message}</p>}
                    </div>

                    {/* destination location */}
                    <div className="form-floating mb-2">
                            <input className="form-control px-5" type="text" placeholder="Destination Location" id="dest-loc" {...register("destinationLocation", { required: "Location is required" })}  />
                        <label htmlFor="dest-loc">Destination Location</label>
                        {errors.destinationLocation && <p className="text-danger fw-bold m-0">{errors.destinationLocation.message}</p>}
                    </div>

                    {/* destination description */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" data-toggle="tooltip" data-placement="left" title="Should be atleast 500 characters"  type="text" placeholder="Description" id="description" {...register("description" , {required: "Some description is required."})} />
                        <label htmlFor="description">Description</label>
                        {errors.description && <p className="text-danger fw-bold m-0">{errors.description.message}</p>}
                    </div>

                    {/* cost per person*/}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" type="number" placeholder="Cost/person ($)" id="cost" {...register("costPerPerson" , {required: "Cost is required"})} />
                        <label htmlFor="cost">Cost/person ($)</label>
                        {errors.costPerPerson && <p className="text-danger fw-bold m-0">{errors.costPerPerson.message}</p>}
                    </div>
                        
                    {/* Rating*/}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" data-toggle="tooltip" data-placement="left" title="0.0 to 5.0" type="number" step="0.01" placeholder="Rating" id="rating" {...register("rating" , {required: "Rating is required"})} />
                        <label htmlFor="rating">Rating</label>
                        {errors.rating && <p className="text-danger fw-bold m-0">{errors.rating.message}</p>}
                    </div>

                    {/* image url */}
                    <div className="form-floating mb-2">
                        <input className="form-control px-5" data-toggle="tooltip" data-placement="left" title="Minimum resolution 600*600" type="text" placeholder="Image URL" id="img" {...register("image", { required: "Image URL is required" })} />
                        <label htmlFor="img">Image URL</label>
                        {errors.image && <p className="text-danger fw-bold m-0"> {errors.image.message}</p>}
                    </div>

                    <div><button className="btn-generic  btn-red">
                            Add Service
                        </button>
                    </div>

                </form>
                </div>


            </div>
        </div>
    );
};

export default AddService;
