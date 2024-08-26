import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../Inputs/Input';
import { LoginPageDiv, LoginPageButton, LoginPageForm } from './LoginPage.styles';

const LoginPage = () => {

    const methods = useForm({
        defaultValues: {
            identifier: '',
            password: ''
        }
    });

    const { handleSubmit } = methods;
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', data);
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
            <h2>Login</h2>
            <FormProvider {...methods}>
                <LoginPageForm onSubmit={handleSubmit(handleLogin)}>
                    <Input
                        name="identifier"
                        label="Username or email:"
                        isRequired={true}
                        placeholder="Enter username or email"
                        validationRules={{
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Enter a valid email address',
                            },
                        }}
                    />
                    <Input
                        name="password"
                        label="Password:"
                        isRequired={true}
                        type="password"
                        placeholder="Enter password"
                        validationRules={{
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            },
                        }}
                    />
                    <LoginPageButton type="submit">
                        Log In
                    </LoginPageButton>
                    <LoginPageButton type="button" onClick={handleRegister}>
                        Register
                    </LoginPageButton>
                </LoginPageForm>
            </FormProvider>
        </LoginPageDiv>
    );
};

export default LoginPage;

