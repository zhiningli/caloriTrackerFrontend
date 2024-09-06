import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SideBarContainer = styled.div.attrs(({ $isOpen }) => ({
    'data-isopen': $isOpen,
}))`
    padding: 5px;
    background-color: ${props => props.theme.colorIvory};
    border-right: 1px solid #ddd;
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: ${({ $isOpen }) => ($isOpen ? '300px' : '50px')}; // Use $isOpen here
    overflow: hidden;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1); /* Adding shadow */
`;

export const SideBarTabGroup = styled.div`
    margin-bottom: 10px;
    width:100%;
`;

export const SideBarTab = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    background-color: ${({ $active, theme }) => ($active ? theme.colorSoftWhite : 'transparent')};
    transition: background-color 0.1s;
    width: 100%;

    &:hover {
        background-color: ${props => props.theme.colorSoftWhite};
    }

    button {
        background: none;
        border: none;
        color: black;
        cursor: pointer;
        font-size: 1rem;
        padding: 0;
        text-align: left;
        width: 100%;
    }

    button:focus {
        outline: none;
    }
`;


export const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

export const SideBarTabTitle = styled.div`
    font-weight: bold;
    margin: 15px 0;
`;