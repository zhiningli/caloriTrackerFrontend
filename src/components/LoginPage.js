import React, { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () =>{
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                identifier,
                password
            });
            console.log('Login response: ', response.data);
            if (response.status === 200){
                alert('login successful!')
                navigate('/mealplan');
            }
        } catch (error) {
            console.error('Error loggin in', error);
            alert('login failed. Please check your credentials and try again.')
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className='login-page'>
            <h2>Login</h2>
            <div className='login-form'>
                <label>
                    Username or email:
                    <input
                        type='text'
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder='Enter username or email'
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                    />
                </label>
                <button onClick={handleLogin}>Log In</button>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default LoginPage;