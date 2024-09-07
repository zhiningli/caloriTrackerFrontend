import styled from 'styled-components';

export const DashboardTitle = styled.h1`
    font-size： 30px;
    font-weight: bold;
    text-align: Left;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-left: 20px;
    color: ${props => props.theme.colorPandaBrown};
`

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
    flex: 1; 
    overflow-y: auto;
    max-height: 500px; 
    width: 45%;
    padding: 10px;
`;

export const Divider = styled.hr`
    box-sizing: border-box;
    margin: 0;
    height: 0;
    border: 0;
    border-bottom: 1px solid;
`;
