import styled from 'styled-components';

export const LoginPageDiv = styled.div`
    background-color: ${props => props.theme.colorSoftWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    padding: 20px;
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

export const LoginPageButton = styled.button`
    padding: 15px;
    font-size: 18px;
    background-color: ${props => props.theme.colorDeepTerracotta};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    width: calc(100% - 30px);
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background-color: darken(${props => props.theme.colorDeepTerracotta}, 10%);
    }
`;
