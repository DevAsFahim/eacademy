import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Cources.css'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className="page_banner">
                <h1>Courses</h1>
            </div>
            <div className="courses_container">
                <div className="container-fluid">
                    <div className="row px-3 g-4">
                        <div className="col-md-3">
                            <div className="courses_sidebar shadow rounded-3 px-3 py-5">
                                <h4 className='text-center mb-4'>Find your courses</h4>
                                <div className="sidebar_content">
                                    {
                                        courses.map(course => <p className='sidebar_link' key={course._id}>
                                            <Link to={`/courses/${course._id}`}>{course.title}</Link>
                                        </p>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="courses">
                                <div className="courses_heading text-center mb-4 mx-auto">
                                    <h1>We found {courses.length} courses for you </h1>
                                </div>
                                <div className="course_content">
                                    <div className='row g-3'>
                                        {
                                            courses.map(course => <Course key={course._id} course={course} ></Course>)
                                        }
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

export default Courses;