import styled from 'styled-components';

export const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px; /* Adjust the size as needed */
    height: 50px; /* Adjust the size as needed */
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 10px; /* Adjust the spacing as needed */
    padding: 10px; /* Adjust the padding as needed */
    
    .label {
        font-size: 14px;
        font-weight: bold;
    }
    
    .value {
        font-size: 16px;
        margin-top: 5px;
    }
`;
