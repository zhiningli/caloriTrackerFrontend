import styled from 'styled-components';

export const StyledButton = styled.button`
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