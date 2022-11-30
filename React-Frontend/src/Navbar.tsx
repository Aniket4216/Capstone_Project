import React from 'react';

import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             
            
            <h1 className="navbar-brand mr-2" >School Managment System</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to='/signin' className="nav-link" >SignIn</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/book">Library</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;