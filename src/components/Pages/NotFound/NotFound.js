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
            <div>
                 <h1 className="display-3 fw-bold">404</h1>
            </div>
            <h4 className="px-4 ">Those who wander are never lost.</h4>
            <h5 className="px-4">The page you are looking for might have been removed <br /> or is temporarily unavailable.</h5>
            <div>
                <button className="btn-banner" onClick={redirectToHome}>
                    Go to Home
                    <i class="fas fa-home ms-1"></i>
                </button>
            </div>
        </div>
    );
};

export default NotFound;