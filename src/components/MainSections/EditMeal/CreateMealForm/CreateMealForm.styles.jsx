import styled from 'styled-components';

export const MealFormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100%;
`;

export const MealRow = styled.div`
    display: auto;
    align-items: left;
    width: 95%
    height: 45px;
`

export const MultiColRow = styled.div`
    display: flex;
    align-items: left;
    flex-direction: row;
    gap:5px;
    width: 95%
    height: 45px;
`

export const FoodSection = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 200px;
    box-sizing: content-box; 
    z-index: 1; 
    overflow-y: scroll;
    position: relative; 
`;

export const FoodRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap:5px;
`