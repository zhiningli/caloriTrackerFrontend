import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 1px solid;
    padding: 10px 20px; /* Adjust padding as needed */
    font-size: 16px;
    text-align: center;
    color: blue;
    background-color: #F48B16;

    &:hover {
        color: white;
        background-color: blue;
        cursor: pointer;
    }
`;
