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

export const CreateMealSubSection = styled.div`
    padding: 0 20px 20px 20px;
    width: 50%;
    background-color: ${props => props.theme.colorIvory};
`
