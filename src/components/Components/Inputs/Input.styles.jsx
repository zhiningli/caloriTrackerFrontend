import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative; 
    margin-bottom: 25px;
`;

export const InputLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
`;

export const InputField = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colorFurRed};
    border-radius: 5px;
    width: 100%;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    top: 100%; /* Position the error message just below the input field */
    left: 0;
    margin-top: 5px; /* Small margin to separate the error message from the input */
`;
