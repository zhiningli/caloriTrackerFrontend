import styled from 'styled-components';

export const LoginPageDiv = styled.div`
    background-color: ${props => props.theme.colorSoftWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
    padding: 20px;
    margin: auto; 
`;

export const LoginPageForm = styled.form`
    background-color: ${props => props.theme.colorIvory};
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

