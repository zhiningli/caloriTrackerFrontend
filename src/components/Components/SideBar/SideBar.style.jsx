import styled from 'styled-components';

export const SideBarContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
`;

export const CalendarContainer = styled.div`
    margin-bottom: 20px;
`;
