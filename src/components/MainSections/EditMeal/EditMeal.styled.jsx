import { styled } from 'styled-components';


export const CreateMealHeader = styled.div`
    height: 10%;
    width: 100%;
    padding: 20px;
    display: flex;
`

export const CreateMealSection = styled.div`
    width: 100 %;
    display: flex;
    flex-direction: row;
    height: 90%;
`

export const CreateMealSubSection = styled.div`
    display: flex;
    width: 50%;
    background-color: ${props => props.theme.colorIvory};
`
