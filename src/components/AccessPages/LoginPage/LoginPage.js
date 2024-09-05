import React from 'react';
import { FormProvider } from 'react-hook-form';
import Input from '../../Inputs/Input';
import { LoginPageDiv, LoginPageButton, LoginPageForm } from '../AccessPage.styles';
import LoadingScreen from '../../LoadingComponent/LoadingScreen';

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
                    <LoginPageButton type="submit">
                        Log In
                    </LoginPageButton>
                    <LoginPageButton type="button" onClick={handleRegister}>
                        Register
                    </LoginPageButton>
                </LoginPageForm>
            </FormProvider>
            {isLoading && <LoadingScreen/>}
        </LoginPageDiv>
    );
};

export default LoginPage;


