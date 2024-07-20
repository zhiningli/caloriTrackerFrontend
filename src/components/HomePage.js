import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleGuestLogin = () => {
        navigate('/');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className='home-page'>
            <button className='login-button' onClick={handleGuestLogin}> Log In as Guest</button>
            <button className='login-button' onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default HomePage;
