import React from 'react';
import { FormProvider } from 'react-hook-form';
import Input from '../../Reusable Components/Inputs/StandardInput/StandardInput';
import { LoginPageDiv, LoginPageForm } from '../AccessPage.styles';
import LoadingScreen from '../../LoadingComponent/LoadingScreen';
import Button from '../../Reusable Components/Button/Button';

const LoginPage = ({ handleSubmit, loginMethods, handleLogin, handleRegister, isLoading }) => {


    return (
        <LoginPageDiv>
            <h2>Login</h2>
            <FormProvider {...loginMethods}>
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
                    <Button type="submit" text='Log In'>
                    </Button>
                    <Button type="button" onClick={handleRegister} text='Register'/>
                </LoginPageForm>
            </FormProvider>
            {isLoading && <LoadingScreen/>}
        </LoginPageDiv>
    );
};

export default LoginPage;


