import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../Inputs/Input';
import { LoginPageDiv, LoginPageButton, LoginPageForm } from '../AccessPage.styles';
import { generateSlug, generateIndexedSlug } from './RegistrationMethods/Slug';

const RegistrationPage = () => {
    const [passwordMatchError, setPasswordMatchError] = useState(null);
    
    const registrationMethods = useForm({
        defaultValues: {
            username: '',
            password: '',
            rePassword: '',
            email: '',
        }
    });

    const { handleSubmit, watch, setError, clearErrors } = registrationMethods;
    const navigate = useNavigate();

    const password = watch('password');
    const rePassword = watch('rePassword');

    useEffect(() => {
        if (rePassword && password !== rePassword) {
            setPasswordMatchError("Passwords do not match.");
            setError("rePassword", { type: "manual", message: "Passwords do not match." });
        } else {
            setPasswordMatchError(null);
            clearErrors("rePassword");
        }
    }, [password, rePassword, setError, clearErrors]);

    const handleLogin = () => {
        navigate('/login');
    }

    const handleRegister = async (data) => {
        const { username, password, email } = data;

        const slug = await generateIndexedSlug(generateSlug(username));
        console.log('Unique Slug generated: ', slug);


        if (password !== rePassword) {
            setError("rePassword", { type: "manual", message: "Passwords do not match." });
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username,
                password,
                email,
                slug,
            });
            console.log('Register: ', response.data);
            navigate(`/${slug}/mealplan`);
        } catch (error) {
            console.error('Registration error: ', error);
        }
    };

    return (
        <LoginPageDiv>
            <h2>Register</h2>
            <FormProvider {...registrationMethods}>
                <LoginPageForm onSubmit={handleSubmit(handleRegister)}>
                    <Input
                        name="username"
                        label="Username"
                        isRequired={true}
                        placeholder="Enter your username"
                        validationRules={{
                            required: 'Username is required',
                        }}
                    />
                    <Input
                        name="email"
                        label="Email"
                        isRequired={true}
                        placeholder="Enter your email"
                        validationRules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Enter a valid email address',
                            },
                        }}
                    />
                    <Input
                        name="password"
                        label="Password"
                        type="password"
                        isRequired={true}
                        placeholder="Enter your password"
                        validationRules={{
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            },
                        }}
                    />
                    <Input
                        name="rePassword"
                        label="Re-enter Password"
                        type="password"
                        isRequired={true}
                        placeholder="Re-enter your password"
                        validationRules={{
                            required: 'Please re-enter your password',
                        }}
                        error={passwordMatchError}
                    />
                    <LoginPageButton type="submit">
                        Register
                    </LoginPageButton>
                    <LoginPageButton type="button" onClick={handleLogin}>
                        Login
                    </LoginPageButton>
                </LoginPageForm>
            </FormProvider>
        </LoginPageDiv>
    );
};

export default RegistrationPage;
