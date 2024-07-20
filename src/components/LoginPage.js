import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const hangleLogin = () => {
        console.log('Login ', {username, password, email});
    };

    const handleRegister = () => {
        console.log('Register: ', { username, password, email});
    };

    return (
        <div className='login-page'>
            <h2>Login</h2>
            <div className='login-form'>
                <label>
                    Username:
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default LoginPage;