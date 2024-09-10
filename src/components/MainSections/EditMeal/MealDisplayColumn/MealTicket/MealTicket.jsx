import React from 'react';
import {
  MealTicketContainer,
  MealTicketHeader,
  MealCategory,
  MealCalories,
  MealIngredients,
  MealName,
  MealCaloriesContainer,
  MealMetricsContainer,
  MealMetrics,
  MealMetricsName,
  MealMetricsValue,
  MealCaloriesValue,
  MealCaloriesUnit,
  MealTicketFirstCol,
  MealTicketSecondCol
} from './MealTicket.styles';

const MealTicket = ({name, category, calories, ingredients, proteins, fats, carbs, onTicketClick, status }) => {

  return (
    <MealTicketContainer onClick={onTicketClick} $status={status}>
      <MealTicketFirstCol>
        <MealTicketHeader>
          <MealName>{name}</MealName>
          <MealCategory>{category}</MealCategory>
        </MealTicketHeader>
        <MealIngredients>
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
            <MealMetricsValue>{proteins} g</MealMetricsValue> 
            <MealMetricsName>Proteins</MealMetricsName>
          </MealMetrics>
          <MealMetrics type={'fat'}>
            <MealMetricsValue>{fats} g</MealMetricsValue>
            <MealMetricsName>Fats</MealMetricsName>
          </MealMetrics>
          <MealMetrics type={'carb'}>
            <MealMetricsValue>{carbs} g</MealMetricsValue> 
            <MealMetricsName>Carbs</MealMetricsName>
          </MealMetrics>
        </MealMetricsContainer>
      </MealTicketSecondCol>
    </MealTicketContainer>
  );
};

export default MealTicket;
