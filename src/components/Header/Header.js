import React from 'react';
import { Link } from 'react-router-dom';
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
    const {user} = useContext(AuthContext)
    
    return (
        <Navbar collapseOnSelect expand="lg" bg={mode ? 'light' : 'dark'} variant={ mode ? 'light' : 'dark'}>
            <Container>
                <Navbar.Brand><Link to='/' className={mode ? 'text-dark' : 'text-white'}> <img src={logo} alt="" /> EAcademy </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link to='/' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>Home</Link>
                        <Link to='/courses' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>Courses</Link>
                        <Link to='/faq' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>FAQ</Link>
                        <Link to='/blog' className={`nav_link ${mode ? 'text-dark' : 'text-white'} `}>Blog</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Link className='mode me-3' onClick={() => setMode(!mode)}>
                            {mode ? <FaMoon className='text-dark' ></FaMoon> : <FaSun className='text-white'></FaSun>}
                        </Link>
                        <Link to='/login' className='btn'>Login</Link>
                        <Link to='/register' className='default-btn btn'>Register Now</Link>
                        <span> {user.displayName} </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;