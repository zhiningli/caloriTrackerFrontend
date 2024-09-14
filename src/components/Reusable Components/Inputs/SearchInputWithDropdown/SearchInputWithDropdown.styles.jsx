import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative; 
    margin-bottom: 15px;
`;

export const InputLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
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
    top: 90%;
    left: 0;
    margin-top: 5px;
`;

export const Dropdown = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 220px;
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
    background: white;
    z-index: 1000;
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;



export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    &:hover {
        background-color: #f1f1f1;
    }
`;
