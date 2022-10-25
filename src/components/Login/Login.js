import React, { useState } from 'react';
import register from '../../assets/image/register.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { userLogIn } = useContext(AuthContext)

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setSuccess(false)
        setError(false)

        userLogIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset()
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error);
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;