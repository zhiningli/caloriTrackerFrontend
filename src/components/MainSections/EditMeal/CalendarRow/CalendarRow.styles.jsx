import styled from 'styled-components';

export const CalendarRowContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
`;

export const DayBlock = styled.button`
    width: 14%;
    height: 60px; 
    background-color: ${props => (props.$isToday ? props.theme.colorSoftWhite : props.theme.colorIvory)};
    border: 1px solid ${props => props.theme.colorSoftWhite};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
        background-color: ${props => props.theme.colorSoftWhite};
    }
`;
