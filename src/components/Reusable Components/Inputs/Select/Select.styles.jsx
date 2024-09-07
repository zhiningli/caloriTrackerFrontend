import styled from 'styled-components';

export const SelectWrapper = styled.div`
    position: relative;
    margin-bottom: 25px;
`;

export const SelectLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
`;

export const SelectField = styled.select`
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colorFurRed};
    border-radius: 5px;
    width: 100%;
    appearance: none; /* Customize the select appearance */
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 4 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23333' d='M2 0L0 2h4z'/%3E%3C/svg%3E"); 
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
`;
