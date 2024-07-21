import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password !== rePassword) {
            setPasswordError('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username,
                password,
                email,
            });
            console.log('Register: ', response.data);
            navigate('/login')
        } catch (error) {
            console.error('Registration error: ', error);
        }
    };

    return (
        <div className='registration-page'>
            <h2>Register</h2>
            <div className='registration-form'>
                <label>
                    Username:
                </label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>
                    Password:
                </label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>
                    Re-enter Password:
                </label>
                <input
                    type='password'
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
                {passwordError && <p className='error-message'>{passwordError}</p>}
                <label>
                    Email:
                </label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default RegistrationPage;
