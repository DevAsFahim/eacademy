import React from 'react';
import './Register.css';
import register from '../../assets/image/register.png';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const { createUser, createUserWithGoogle } = useContext(AuthContext)

    // sign in with email and password 
    const handleCreateUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess(false)
        setError(false)


        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setSuccess(true)
                form.reset()
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    // sign in with google
    const handleGoogleUser = () => {
        createUserWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            setError(error.message)
        });
    }

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
                                <form onSubmit={handleCreateUser}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name='email' className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' className="form-control" placeholder="Your Password" required />
                                    </div>
                                    {success && <p className="text-success">Successfully registered</p>}
                                    {error && <p className="text-danger">{error}</p>}
                                    <button className="btn default-btn d-block w-100">Register Now</button>
                                </form>
                                <button onClick={handleGoogleUser} className="btn mt-2 btn-outline-primary d-block w-100"> <FaGoogle  className='me-3'></FaGoogle> Register with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;