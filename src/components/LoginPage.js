import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleGuestLogin = () => {
        navigate('/');
    };

    const handleLogin = () => {
        alert('Login functionality not implemented yet.');
    };

    return (
        <div className='login-page'>
            <button className='login-button' onClick={handleGuestLogin}> Log In as Guest</button>
            <button className='login-button' onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginPage;
