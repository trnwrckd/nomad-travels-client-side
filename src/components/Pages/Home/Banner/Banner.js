import './Banner.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

const Banner = () => {

    const history = useHistory();
    const { user } = useAuth();

    const redirectToRegister = () => {
        history.push('/register')
    }

    return (
        <div className="banner mt-nav d-flex align-items-center justify-content-center">
            <div className='container'>
                <div className="my-5">
                    <div className="my-5 py-5 my-lg-0 transparent-bg">
                        <h1 className="mb-3 display-3">
                            <span className="logo-nomad">Nomad</span>
                            <span className="logo-travels">Travels</span>
                        </h1>
                        <h1 className="mb-3 heading-1">Hello Wayfarer!</h1>
                        <h6 className="mb-3 lead"> NomadTravels™  is an international travel planner and organizer based on Dhaka,Bangladesh. <br /> Contact us to get away from everything. <br /> Our services are just a click away.</h6>
                        {
                            !user.email &&
                            <button onClick={redirectToRegister} className="btn-generic">
                                Login<i className="fas fa-sign-in-alt ms-1"></i>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;