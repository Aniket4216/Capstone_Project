import React from 'react';
import  Navbar  from './Navbar';


const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className='container p-5' >
                <h2 className='text-center text-white mb-2'>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control mt-2" id="exampleInputPassword1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter Number" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control mt-2" id="exampleInputPassword1" placeholder="Message" cols={30} rows={10} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;