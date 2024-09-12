import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { categoryIconMap } from '../../../../Reusable Components/CategoryIcons/CategoryIconMap';
import { getFoodCategoryFromIndexedDB } from '../../../../../utils/indexedDBUtil';
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

const MealTicket = ({ name, category, calories, ingredients, proteins, fats, carbs, onTicketClick, status }) => {
  const [ingredientCategories, setIngredientCategories] = useState([]);

  const getIngredientIcons = async (ingredients) => {
    const categorySet = new Set();
  
    for (const foodName of ingredients) {
        const category = await getFoodCategoryFromIndexedDB(foodName); 
        if (category) {
            categorySet.add(category.toLowerCase()); 
        }
    }
  
    return Array.from(categorySet);
  };

  useEffect(() => {
    const fetchIngredients = async () => {
      const categories = await getIngredientIcons(ingredients); 
      setIngredientCategories(categories); 
    };
    fetchIngredients();
  }, [ingredients]); 

  return (
    <MealTicketContainer onClick={onTicketClick} $status={status}>
      <MealTicketFirstCol>
        <MealTicketHeader>
          <MealName>{name}</MealName>
          <MealCategory>{category}</MealCategory>
        </MealTicketHeader>
        <MealIngredients>
          {ingredientCategories.map((category, index) => {
            const icon = categoryIconMap[category]?.icon;
            const color = categoryIconMap[category]?.color;

            return (
              <FontAwesomeIcon
                key={index}
                icon={icon}
                style={{ color: color, marginRight: '8px', fontSize: '16px' }} 
              />
            );
          })}
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
