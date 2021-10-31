import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { logOut, user, isLoading } = useAuth();

    return (
        <div className="custom-nav fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid px-3 d-flex align-items-center">
                    
                    <a className="navbar-brand" href="/">
                        <span className="logo-text">
                            <span data-col="cyan">Nomad</span>
                            <span data-col="orange">Travels™</span>
                        </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {
                                user.email ?
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                        <li className = "nav-item mb-2 mb-lg-0">
                                            <NavLink to="/home"  className="common" activeClassName="active">Home</NavLink>
                                        </li>
                                        <li className = "nav-item mb-2 mb-lg-0">
                                            <NavLink to="/myorders"  className="common" activeClassName="active">My Orders</NavLink>
                                        </li>
                                    
                                        <li className="nav-item mb-2 mb-lg-0 dropdown d-flex flex-column align-items-center">
                                            <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                Admin Options
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li className = "nav-item mb-2 mb-lg-0">
                                                    <NavLink to="/manageorders"  className="common" activeClassName="active">Manage Orders</NavLink>
                                                </li>
                                                <li className = "nav-item mt-2 mb-lg-0">
                                                    <NavLink to="/addservice"  className="common" activeClassName="active">Add a package</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className = "nav-item mb-2 mb-lg-0">
                                            {!isLoading && <span className="fs-6 mx-2">{user.displayName}</span>}
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0">
                                            <button className='btn-logout' onClick={logOut}><i className="fas fa-sign-out-alt ms-1"></i>
                                            </button>
                                        </li>
                                        </ul>
                                :
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item mb-2">
                                                <NavLink to="/login" className="common" activeClassName="active">Login</NavLink>
                                            </li>
                                        </ul>
                            }
                            
                    </div>
                </div>
            </nav>
        </div>
            
    );
};

export default Header;