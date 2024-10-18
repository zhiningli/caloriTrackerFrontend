import styled from 'styled-components';

export const CalendarRowContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
`;

export const DayBlock = styled.div`
    width: 14%;
    height: 50px;
    background-color: ${props => props.theme.colorIvory};
    border: 1px solid ${props => props.theme.colorSoftWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
        background-color: ${props => props.theme.colorSoftWhite};
    }
`;