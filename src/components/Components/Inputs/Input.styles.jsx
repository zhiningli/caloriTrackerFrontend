import styled from 'styled-components';

export const InputLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
    margin-bottom: 5px;
`;

export const InputField = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colorFurRed};
    border-radius: 5px;
    margin-bottom: 15px;
    width: 100%;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 10px;
    display: block;
`;
