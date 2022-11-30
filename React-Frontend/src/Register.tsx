import React from 'react';
import axios from "axios";
// import { Component } from "react";
// import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

export class Register extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        
        console.log(data);

        const teacher = {
            fullName: data.get("fulltName"),
            email: data.get("email"),
            phone: data.get("phone"),
            designation: data.get("designation"),
            password: data.get("password")
        }

        console.log(teacher)

        axios.post("http://localhost:7071/signUp", teacher)
        window.location.reload();

    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center mt-4'>Signup Form</h1>
                <form action='POST' onSubmit={this.handleSubmit}>
                    <section className="vh-100">
                        <div className="container py-5 h-100">
                            <div className="row d-flex align-items-center justify-content-center h-100">
                                {/* <div className="col-md-8 col-lg-7 col-xl-6">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                        className="img-fluid" alt="Phone image" />
                                </div> */}
                                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                    <form>
                                        <div className="mb-4">
                                            <input type="text" id="fulltName" className="form-control form-control-lg" placeholder="Enter Full Name" style={{ border: "1px solid gray" }} />
                                        </div>
                                        <div className="mb-4">
                                            <input type="email" id="email" className="form-control form-control-lg" placeholder="Email Address" style={{ border: "1px solid gray" }} />
                                        </div>
                                        <div className="mb-4">
                                            <input type="number" id="phone" className="form-control form-control-lg" placeholder="Enter Phone Number" style={{ border: "1px solid gray" }} />
                                        </div>
                                        <div className="mb-4">
                                            <input type="text" id="designation" className="form-control form-control-lg" placeholder="Designation" style={{ border: "1px solid gray" }} />
                                        </div>
                                        <div className=" mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" style={{ border: "1px solid gray" }} />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block" >Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>

            </div>
        )
    }

}
