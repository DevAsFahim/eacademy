import React from 'react';
import './Home.css'
import banner1 from '../../assets/image/banner1.png'
import cir from '../../assets/image/cir.svg'

const Home = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner_img">
                            <img src={banner1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner_content">
                            <img src={cir} alt="" />
                            <h1>Improve Your Online Learning Experience Better Instantly</h1>
                            <p>We have <span className="text-warning">40k+</span> Online courses & <span className="text-warning">500K+</span> Online registered student. Find your desired Courses from them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;