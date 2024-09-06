import styled from 'styled-components';

export const MealPlanContainer = styled.div`
    background-color: ${props => props.theme.colorIvory};
    border: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const MealPlanSubContainer = styled.div`
    background-color: ${props => props.theme.colorIvory};
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    flex: 1; /* Make sure both sections take equal space */
    overflow-y: auto; /* Add vertical scroll */
    max-height: 500px; /* Adjust max height as needed */
    width: 45%;
    padding: 10px; /* Add padding for content spacing */
`;

export const Divider = styled.hr`
    box-sizing: border-box;
    margin: 0;
    height: 0;
    border: 0;
    border-bottom: 1px solid;
`;
