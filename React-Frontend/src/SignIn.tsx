import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const navigate = useNavigate();


    const emailChangeHandler = (e) => {
        setemail(e.target.value)
    }

    const passChangeHandler = (e) => {
        setpass(e.target.value)
    }

    const formSubmitHandler = (e) => {

        e.preventDefault();

        if (email == "Ashish@gmail.com" && pass == "1234" || email == "Aniket@gmail.com" && pass == "1234" || email == "pratik@gmail.com" && pass == "1234" || email == "Teacher@gmail.com" && pass == "1234") {
            // alert('Login Success')
            setemail("");
            setpass("");
            navigate('/dashboard');
        }
        else {
            alert('Invalid Credentials')


        }

    }


    return (
        <>
            <div>
                <Navbar />
                <h2 className='text-center mt-4 text-white'>Sign In for Teacher</h2>
                <div className="login-form">
                    <form method="POST">
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <span className="fa fa-user"></span>
                                    </span>
                                </div>
                                <input type="email" className="form-control" name="email" placeholder="Enter your email"
                                    value={email} onChange={emailChangeHandler}
                                    required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={pass} onChange={passChangeHandler} />
                            </div>
                        </div>
                        <div className="form-group">
                            <Link to="/dashboard">
                                <button type="submit" className="btn btn-primary login-btn btn-block mt-3"
                                    name="signin"
                                    value="Signin"
                                    onClick={formSubmitHandler}
                                >Log in</button>
                            </Link>
                        </div>
                    </form>
                    <p className="text-center text-muted small">Don't have an account?Sign up here!</p>
                </div>
            </div>
        </>
    )
}

export default SignIn;