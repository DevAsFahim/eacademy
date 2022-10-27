import React from 'react';
import { FaCrown } from 'react-icons/fa';

const Premium = () => {
    return (
        <div>
            <div className="page_banner text-center">
                <h1>
                    <FaCrown></FaCrown> <br />
                    Go Premium
                </h1>
            </div>
            <div className="premium_container my-5">
                <h2 className="text-success text-center mb-4">Become Pro and Explore More</h2>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="premium_content py-4 px-3 shadow rounded-4">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <h5>12 MONTHS</h5>
                                        <h1 className='text-warning'>$80<small><sub className='text-dark'>/month</sub></small> </h1>
                                        <p className='fw-bold'>$960 <span className='text-muted'>every</span> 12 <span className="text-muted">months</span></p>
                                        <small>* VAT and local taxes may apply</small>
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-warning d-block w-100"><FaCrown></FaCrown> Go Pro</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="premium_content py-4 px-3 shadow rounded-4">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <h5>12 MONTHS</h5>
                                        <h1 className='text-warning'>$40<small><sub className='text-dark'>/month</sub></small> </h1>
                                        <p className='fw-bold'>$40 <span className='text-muted'>every</span> <span className="text-muted">month</span></p>
                                        <small>* VAT and local taxes may apply</small>
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-warning d-block w-100"><FaCrown></FaCrown> Go Pro</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;