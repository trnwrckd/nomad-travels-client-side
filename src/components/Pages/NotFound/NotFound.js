import './NotFound.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();

    const redirectToHome = () => {
        history.push('/home')
    }

    return (
        <div className="py-5 mt-nav mt-5 not-found">
            <h1 className="display-3 fw-bold ">404</h1>
            <h4 className="px-4">Those who wander are never lost.</h4>
            <h5 className="px-4">The page you are looking for might have been removed or temporarily unavailable</h5>
            <div className="my-3">
                {/* <img src="./images/not-found.gif" height="300px" width="300px" className="img-fluid" alt=""/> */}
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