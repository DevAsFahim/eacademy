import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [mode, setMode] = useState(true)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg={mode ? 'light' : 'dark'} variant={mode ? 'light' : 'dark'}>
            <Container>
                <Navbar.Brand><Link to='/' className={mode ? 'text-dark' : 'text-white'}> <img src={logo} alt="" /> EAcademy </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink style={({isActive}) => ({color: isActive & "orange" })} to='/' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>Home</NavLink>
                        <NavLink style={({isActive}) => ({color: isActive & "orange" })} to='/courses' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>Courses</NavLink>
                        <NavLink style={({isActive}) => ({color: isActive & "orange" })} to='/faq' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>FAQ</NavLink>
                        <NavLink style={({isActive}) => ({color: isActive & "orange" })} to='/blog' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>Blog</NavLink>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Link className='mode me-3' onClick={() => setMode(!mode)}>
                            {mode ? <FaMoon className='text-dark' ></FaMoon> : <FaSun className='text-white'></FaSun>}
                        </Link>
                        {
                            user?.uid ?
                                <>
                                    <Link onClick={handleLogOut} className={`btn ${mode ? 'text-dark' : 'text-white'} `}>Logout</Link>
                                    <img className='user_image' title={user?.displayName} src={user?.photoURL} alt="" />
                                </>
                                :
                                <>
                                    <Link to='/login' className={`btn ${mode ? 'text-dark' : 'text-white'} `}>Login</Link>
                                    <Link to='/register' className='default-btn btn'>Register Now</Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;