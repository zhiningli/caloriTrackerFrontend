import styled from 'styled-components';

export const NumberInputWrapper = styled.div`
    position: relative;
    margin-bottom: 25px;
`;

export const NumberInputLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
`;

export const NumberInputField = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colorFurRed};
    border-radius: 5px;
    width: 100%;

    /* Optional: Style the arrows */
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    & {
        -moz-appearance: textfield; /* Hides the arrows in Firefox */
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    top: 90%;
    left: 0;
    margin-top: 5px;
`;
