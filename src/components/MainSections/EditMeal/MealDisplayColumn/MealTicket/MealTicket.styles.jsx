import styled, {css} from 'styled-components';

export const MealTicketContainer = styled.div`
  border: 2px solid ${props => props.theme.colorFurRed};
  border-radius: 4px;
  margin: 10px;
  background-color: ${props => props.theme.colorSoftWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 140px;;
  flex-direction: row;
  display:flex;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Darken slightly */
  }

  ${({ $status }) =>
    $status === 'delete-pending' &&
    css`
      background-color: rgba(0, 0, 0, 0.3); /* Dark overlay */
    `}
    
  ${({ $status }) =>
    $status === 'new' &&
    css`
      background-color: rgba(0, 255, 0, 0.1); /* Light green overlay */
    `}
`;

export const MealTicketFirstCol = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 40%;
  border-right: 2px dashed ${props => props.theme.colorFurRed};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 6px;
    width: 12px; 
    background-color: ${props => props.theme.colorFurRed};
    border-radius: 6px 6px 0 0 ;
  }

  &::after {
    bottom: -2px;
    right: -7px;
  }

`;

export const MealTicketSecondCol = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 60%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 6px;
    width: 12px; 
    background-color: ${props => props.theme.colorFurRed};
    border-radius: 0 0 6px 6px ;
  }

  &::before {
    top: -2px;
    left: -7px;
  }


`;

export const MealTicketHeader = styled.div`
  width: 100%-20px;
  align-item: left;
  height: 50%-10px;
  margin-left: 20px;
  margin-top: 10px;
`

export const MealCaloriesContainer = styled.div`
  width: 100%-20px;
  height: 50%-10px;
  display: flex;
  align-items: right;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 10px;
`

export const MealName = styled.h2`
  font-size: 18px;
`

export const MealCategory = styled.p`
  color: #b08968;
  font-size: 15px;
`;

export const MealCalories = styled.div`
  display: flex; 
  align-items: baseline;
  background-color: transparent;
  color: ${props => props.theme.colorPandaBrown};
  height: 50%;
`;

export const MealCaloriesValue = styled.h2`
  font-size: 24px;
  margin-right: 5px;
  margin-left: auto;
`;

export const MealCaloriesUnit = styled.p`
  font-size: 14px;
  color: gray;
`;

export const MealIngredients = styled.div`
  flex-grow: 1;
  background-color: transparent;
  color: ${props => props.theme.colorPandaBrown};
  text-align: left;
  width: 100%-20px;
  height: 50%-20px;
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 10px;
`

export const MealMetricsContainer = styled.div`
  display: flex;
  width: 100%-40px;
  flex-direction: row;
  justify-content: space-between;
  height: 50%-30px;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
`

export const MealMetrics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ type }) => {
    switch (type) {
      case 'protein':
        return '#026e38';
      case 'fat':
        return '#02035c'; 
      case 'carb':
        return '#79027d';  
      default:
        return 'white';   
    }
  }};
  padding: 10px;
`;

export const MealMetricsValue = styled.div`
  font-size: 20px;
`

export const MealMetricsName = styled.p`
  font-size: 15px;
  font-style: bold;
`