import styled from 'styled-components';

export const Icon = styled.i`
    margin-right: 8px;
    color: ${(props) => props.color || 'black'};
`;

export const ThemedDropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    
    &:hover {
        background-color: #f1f1f1;
    }
`;