import React from 'react';
import { FaAccusoft, FaCrown, FaMoneyBill, FaStopwatch } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = () => {
    const singleCourse = useLoaderData();
    return (
        <div className='single_course container py-5'>
            <div className="row g-3">
                <div className="col-md-4">
                    <div className="course_short_details shadow rounded-3 px-3 py-4">
                        <h5>{singleCourse.title}</h5>
                        <p>
                            Rating: <span className="text-warning me-2">{singleCourse.rating.number} </span> 
                            Quality: <span className="text-primary">{singleCourse.rating.badge}</span>
                        </p>
                        <p className='text-muted'><FaStopwatch className='me-2'></FaStopwatch> <strong>Total time: {singleCourse.duration}</strong></p>
                        <p className='text-muted'><FaAccusoft className='me-2'></FaAccusoft> <strong>Total classes: {singleCourse.total_class}</strong></p>
                        <p className='text-muted'><FaMoneyBill className='me-2'></FaMoneyBill> <strong>Price: <span className='text-warning fs-4'>${singleCourse.price}</span></strong></p>
                        <Link to={`/premium/${singleCourse._id}`} className="btn btn-warning d-block w-100"><FaCrown className='me-2'></FaCrown> Go Premium Access</Link>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="course_details shadow rounded-3 px-3 py-4">
                        <h3>{singleCourse.title}</h3>
                        <p>{singleCourse.sub_title}</p>
                        <div className="teacher_info mb-4">
                            <img src={singleCourse.author.img} alt="" />
                            <span className="text-success ms-2 fw-bold">{singleCourse.author.name}</span>
                        </div>
                        <img src={singleCourse.image_url} alt="" className="image_url w-100" />
                        <h5 className='mt-5 mb-3'>Description</h5>
                        <p className="text-muted course_description">
                            {singleCourse.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;