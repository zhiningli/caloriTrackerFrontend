import React from 'react';
import {StyledButton} from './Button.styles';

const Button = ({onClick, text, type}) => {

    return (
        <StyledButton type={type} onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button;