import './NotFound.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();

    const redirectToHome = () => {
        history.push('/home')
    }

    return (
        <div className="py-5 mt-nav my-5 not-found">
            <h1>Sorry!</h1>
            <h4 className="px-4">The page you requested wasn't found</h4>
            <div className="my-3">
                <img src="./images/not-found.gif" height="300px" width="300px" className="img-fluid" alt=""/>
            </div>
            <div>
                <button className="btn-generic" onClick={redirectToHome}>
                    Go to Home
                    <i class="fas fa-home ms-1"></i>
                </button>
            </div>
        </div>
    );
};

export default NotFound;