import { styled } from 'styled-components';


export const CreateMealHeader = styled.div`
    height: 150px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid ${props => props.theme.colorFurRed};
`

export const CreateMealCalendarSection = styled.div`   
    width: 100%;
    height: 60px;
`

export const CreateMealSection = styled.div`
    width: 100 %;
    display: flex;
    flex-direction: row;
    height: 90%;
`

export const MealTicketDisplaySection = styled.div`
    padding: 0 20px 20px 20px;
    width: 50%;
    background-color: ${props => props.theme.colorIvory};
    justify-content: center;
    display: flex;
    `

export const CreateMealSubSection = styled.div`
    padding: 0 20px 20px 20px;
    width: 50%;
    background-color: ${props => props.theme.colorIvory};
`

export const CalendarButton = styled.button`
    margin: 10px 0px 10px 20px;
    background-color: ${props => props.theme.colorFurRed};
    color: white;
    border: none;
    padding: 3px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    width: 40px;
    height: 25px;
`
