import styled from "styled-components";

export const MealPlanContainer = styled.div`
    display: flex;
    flex-directino: row;
    align-items: center;
    width: 90%;
    height: 150px;
    margin: 10px;
    padding: 10px;
    background-color: 
    border-radius: 10px;
`

export const FigureBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%; /* Occupy around 80% of the FigureTile's length */
    height: 80%; /* Ensure the height scales accordingly */
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
`;


export const DetailTile = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    background-color: ${props=>(props.theme.colorIvory)};
    border: 2px solid ${props=>(props.theme.colorFurRed)};
    width: 75%;
    height: 120px;
    border-left: none;
    border-right: none;
`

export const NameSection = styled.div`
    font-size: 18px;
    font-weight: bold
`


export const IngredientSection = styled.div`
    font-size: 16px;
    width: 100%
`

export const NutritionSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%
`

export const NutritionBlock = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    text-align: center;

    .label {
        font-size: 12px;
        font-weight: bold;
    }
    
    .value {
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
    }
`;

export const CalorieTile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>(props.theme.colorIvory)};
    border: 2px solid ${props=>(props.theme.colorFurRed)};
    width: 20%;
    height: 120px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const ActionComponentTile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>(props.theme.colorIvory)};
    border: 2px solid ${props=>(props.theme.colorFurRed)};
    width: 10%;
    height: 120px;
    border: none;
`



