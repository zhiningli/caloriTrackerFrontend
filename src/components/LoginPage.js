import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import themeColor from './Theme/theme'; 

import { LoginPageDiv, LoginPageForm, LoginPageLabel, LoginPageInput, LoginPageButton } from './LoginPage.styles';

const LoginPage = () => {
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
            if (response.status === 200) {
                alert('Login successful!');
                navigate('/mealplan');
            }
        } catch (error) {
            console.error('Error logging in', error);
            alert('Login failed. Please check your credentials and try again.');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <LoginPageDiv>
            <h2 style={{ color: themeColor.colorPandaBrown }}>Login</h2>
            <LoginPageForm>
                <LoginPageLabel style={{ color: themeColor.colorPandaBrown }}>
                    Username or email:
                </LoginPageLabel>
                <LoginPageInput
                    type='text'
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder='Enter username or email'
                />
                <LoginPageLabel>
                    Password:
                </LoginPageLabel>
                <LoginPageInput
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter password'
                />
                <LoginPageButton onClick={handleLogin}>
                    Log In
                </LoginPageButton>
                <LoginPageButton onClick={handleRegister}
                >
                    Register
                </LoginPageButton>
            </LoginPageForm>
        </LoginPageDiv>
    );
};

export default LoginPage;
