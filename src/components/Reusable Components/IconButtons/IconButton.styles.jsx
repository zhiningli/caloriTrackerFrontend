import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TransparentButton = styled.button`
    margin: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-items: center;
    color: ${props => props.theme.colorFurRed};

    &:hover {
        color: ${props => props.theme.colorPandaBrown};
    }

    &:disabled {
        color: transparent;
        cursor: default;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
`