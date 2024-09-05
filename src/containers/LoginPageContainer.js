import React,  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { setMeals } from '../redux/mealSlice';
import LoginPage from '../components/AccessPages/LoginPage/LoginPage';

const LoginPageContainer = () => {

    const [isLoading, setIsLoading] = useState(false);

    const loginMethods = useForm({
        defaultValues: {
            identifier: '',
            password: ''
        }
    });

    const { handleSubmit } = loginMethods;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', data);

            if (response.status === 200) {
                const { Token, slug, username } = response.data;
                alert('Login Successful');

                dispatch(setUser({ token: Token, slug, username }));

                const mealsResponse = await axios.get(`http://localhost:8080/api/${slug}/meals`, {
                    headers: { Authorization: `Bearer ${Token}` }
                });

                dispatch(setMeals(mealsResponse.data));

                navigate(`/${slug}/mealplan`);
            }
        } catch (error) {
            console.error('Error logging in', error);
            alert('Login failed. Please refer to the console for bug information');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <LoginPage
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            loginMethods={loginMethods}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
        />
    );
};

export default LoginPageContainer;
