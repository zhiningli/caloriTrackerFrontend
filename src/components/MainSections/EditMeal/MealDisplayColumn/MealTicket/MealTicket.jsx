import React from 'react';
import { MealTicketContainer, MealTicketHeader, MealCategory, MealCalories, MealIngredients, MealName, MealCaloriesContainer, MealMetricsContainer, MealMetrics, MealMetricsName, MealMetricsValue,MealCaloriesValue, MealCaloriesUnit, MealTicketFirstCol, MealTicketSecondCol} from './MealTicket.styles';

const MealTicket = ({ name, category, calories, ingredients }) => {
  return (
    <MealTicketContainer>
        <MealTicketFirstCol>
            <MealTicketHeader>
                <MealName>{name}</MealName>
                <MealCategory>{category}</MealCategory>
            </MealTicketHeader>
            <MealIngredients>
                <h4>Ingredients</h4>
                <p>{ingredients.join(', ')}</p>
            </MealIngredients>
        </MealTicketFirstCol>

        <MealTicketSecondCol>
            <MealCaloriesContainer>
                <MealCalories>
                    <MealCaloriesValue>{calories}</MealCaloriesValue>
                    <MealCaloriesUnit>kCal</MealCaloriesUnit>
                </MealCalories>
            </MealCaloriesContainer>
            <MealMetricsContainer>
                <MealMetrics type={'protein'}>
                    <MealMetricsValue>18g</MealMetricsValue>
                    <MealMetricsName>Protein</MealMetricsName>
                </MealMetrics>
                <MealMetrics type={'fat'}>
                    <MealMetricsValue>18g</MealMetricsValue>
                    <MealMetricsName>Fats</MealMetricsName>
                </MealMetrics>
                <MealMetrics type={'carb'}>
                    <MealMetricsValue>18g</MealMetricsValue>
                    <MealMetricsName>Carbs</MealMetricsName>
                </MealMetrics>
            </MealMetricsContainer>
        </MealTicketSecondCol>
 
    </MealTicketContainer>
  );
};

export default MealTicket;
