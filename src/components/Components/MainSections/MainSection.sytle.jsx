import styled from 'styled-components';

export const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colorIvory};
`;

export const MealSectionContainer = styled.div`
    background-color: ${props => props.theme.colorIvory};
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    flex: 1; /* Make sure both sections take equal space */
    overflow-y: auto; /* Add vertical scroll */
    max-height: 500px; /* Adjust max height as needed */
    padding: 10px; /* Add padding for content spacing */
`;

export const Divider = styled.hr`
    box-sizing: border-box;
    margin: 0;
    height: 0;
    border: 0;
    border-bottom: 1px solid;
`;
