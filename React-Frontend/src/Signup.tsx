import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setname] = useState("")
    const [email, setlemail] = useState("")
    const [phone, setphone] = useState("")
    const [designation, setdesignation] = useState("")
    const [pass, setpass] = useState("")
    const [confirmpass, setconfirmpass] = useState("")

    const nameChangeHandler = (e) => {
        setname(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setlemail(e.target.value);
    }
    const phoneChangeHandler = (e) => {
        setphone(e.target.value)
    }
    const designationChangeHandler = (e) => {
        setdesignation(e.target.value)
    }
    const passChangeHandler = (e) => {
        setpass(e.target.value);
    }
    const confirmpassChangeHandler = (e) => {
        setconfirmpass(e.target.value)
    }

    console.log(name);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == "" || email == "" || phone == "" || designation == "" || pass == "" || confirmpass == "") {
            alert('All Fileds are mandatory to fill')
        }
        else {
            // alert('Registration Successfully')
            setname("")
            setlemail("")
            setphone("")
            setdesignation("")
            setpass("")
            setconfirmpass("")
        }
    }

    return (
        <div>
            <Navbar />
            <h2 className='text-center text-white'>Sign Up for Teacher</h2>
            <div className="signup-form mt-4">
                <form method="POST" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="name"
                            value={name}
                            onChange={nameChangeHandler}
                            placeholder="Username" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email"
                            value={email}
                            onChange={emailChangeHandler}
                            placeholder="Email Address" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="phone"
                            value={phone}
                            onChange={phoneChangeHandler}
                            placeholder="Phone Number" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work"
                            value={designation}
                            onChange={designationChangeHandler}
                            placeholder="Your Profession" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="password"
                            value={pass}
                            onChange={passChangeHandler}
                            placeholder="Password" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="cpassword"
                            value={confirmpass}
                            onChange={confirmpassChangeHandler}
                            placeholder="Confirm Password" required />
                    </div>
                </div>
                <div className="form-group">
                    <Link to="/signin">
                        <button type="submit" name="signup" value="register" className="btn btn-primary btn-lg" onClick={handleSubmit}>Sign Up</button>
                    </Link>
                </div>
                <div className="text-center text-dark">Already have an account? <Link to="/signin">Login here</Link> </div>
            </div>
        </div>
    )
}
export default Signup;