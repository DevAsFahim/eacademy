import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card border-0 shadow-sm">
                <img src={course.image_url} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text"><small>{course.sub_title}</small></p>
                    <div>
                        <span className='fw-bold fs-4 text-warning'>${course.price}</span>
                        <Link to={`/courses/${course._id}`} className='btn default-btn w-100 d-block'> details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;