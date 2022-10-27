import React, { useState } from 'react';
import register from '../../assets/image/register.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { userLogIn, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    // log in user with email and password
    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess(false)
        setError(false)

        userLogIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset()
                navigate(from , {replace: true} )
                setSuccess(true)
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
            navigate("/")
            console.log(user);
        }).catch((error) => {
            setError(error.message)
        });
    }

    // sign in with github
    const handleGithubUser = () => {
        createUserWithGithub()
        .then((result) => {
            const user = result.user;
            navigate("/")
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
                                <form onSubmit={handleLogIn}>
                                    <div className="mb-3">
                                        <input type="email" name='email' className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' className="form-control" placeholder="Your Password" required />
                                    </div>
                                    {success && <p className="text-success">Successfully Logged in</p>}
                                    {error && <p className="text-danger">{error}</p>}
                                    <button className="btn default-btn d-block w-100">Login</button>
                                    <div className="text-end my-3">
                                        <Link to='/register'>Create a new account.</Link>
                                    </div>
                                </form>
                                <button onClick={handleGoogleUser} className="btn mt-2 btn-outline-primary d-block w-100"> <FaGoogle  className='me-3'></FaGoogle> Login with Google</button>
                                <button onClick={handleGithubUser} className="btn mt-2 btn-outline-dark d-block w-100"> <FaGithub  className='me-3'></FaGithub> Login with Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;