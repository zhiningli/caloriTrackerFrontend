import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPageDiv } from '../AccessPage.styles';
import Button from '../../Reusable Components/Button/Button';

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
            <Button type="button" onClick={jumpToLogin} text='Log In'/>
            <Button type="button" onClick={jumapToRegister} text='Register'/>
            <Button type="button" onClick={LogInAsGuest} text='Guest Log in'/>
        </LoginPageDiv>
    );
};

export default HomePage;
