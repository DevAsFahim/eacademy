import React from 'react';
import './Register.css';
import register from '../../assets/image/register.png';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div>
            <div className="page_banner">
                <h1>Authentication</h1>
            </div>
            <div className="connect">
                <div className="container-fluid">
                    <div className="row px-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="connect_img">
                                <img src={register} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="connect_form">
                                <h1>Create your account</h1>
                                <form>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Your Email" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Your Password" />
                                    </div>
                                    <button className="btn default-btn d-block w-100">Register Now</button>
                                    <button className="btn mt-2 btn-outline-primary d-block w-100"> <FaGoogle className='me-3'></FaGoogle> Register with Google</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;