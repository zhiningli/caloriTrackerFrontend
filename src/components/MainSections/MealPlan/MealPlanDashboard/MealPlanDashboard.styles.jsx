import styled from 'styled-components';

export const MealPlanDashBoardContainer = styled.div`
    justfiy-content: inbetween;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
    background-color: ${props => props.theme.colorSoftwhite};
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    height: 150px;
`

export const SectionContainer = styled.div`
    justfiy-content: inbetween;
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 98%;
`

export const ChartContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    height: 100%;
`

export const TileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
`

export const Tile = styled.div`
    width: 50%;
`