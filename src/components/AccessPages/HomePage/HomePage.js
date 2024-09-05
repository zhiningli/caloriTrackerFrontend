import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPageDiv, LoginPageButton } from '../AccessPage.styles';

const HomePage = () => {

    const navigate = useNavigate();

    const jumpToLogin = () => {
        navigate('/login');

    };

    const jumapToRegister = () => {
        navigate('/register');
    };

    const LogInAsGuest = () => {
        alert('Guest login not implemented yet!')
    }

    return (
        <LoginPageDiv>
            <LoginPageButton type="button" onClick={jumpToLogin}>
                Log In
            </LoginPageButton>
            <LoginPageButton type="button" onClick={jumapToRegister}>
                Register
            </LoginPageButton>
            <LoginPageButton type="button" onClick={LogInAsGuest}>
                Log In as Guest
            </LoginPageButton>
        </LoginPageDiv>
    );
};

export default HomePage;
