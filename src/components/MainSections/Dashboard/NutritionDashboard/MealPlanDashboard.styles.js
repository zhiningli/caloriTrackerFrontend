import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MealPlanDashBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const NutritionDashboardTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    text-align: Left;
    margin-left: 20px;
    color: ${props => props.theme.colorPandaBrown};
`

export const DashboardGadgetBlock = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    height: 150px; 
` 

export const GadgetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 23%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: ${props => props.theme.colorSoftWhite};
    align-items: center;
    padding: 10px; /* Ensure padding inside the container */
`

export const ChartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 94px; 
    height: 120px; 
`

export const TileContainer = styled.div`
    display: flex;
    flex-direction: column;  /* Stack items vertically */
    align-items: flex-start; /* Left-align everything */
    margin-top: 10px;
`

export const TileRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 28px;
    color: ${props => props.theme.colorFurRed};
    margin-right: 10px;
    margin-bottom: 6px;
`;

export const TileTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
`

export const TileValue = styled.h2`
  font-size: 24px;
  margin-bottom: 0;
  margin-right: 5px; 
`

export const TileUnit = styled.p`
  font-size: 14px; 
  color: gray;
  margin-bottom: 0;
`

