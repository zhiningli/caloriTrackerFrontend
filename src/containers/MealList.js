import React from 'react';
import { useSelector } from 'react-redux';
import MealPlanComponent from '../components/MainSections/MealPlan/MealPlanComponents/MealPlanComponent';

const MealList = () => {
    const meals = useSelector( (state) => state.meals.meals);

    return(
        <div>
            {meals.map((meal) => {
                const { name, foodNames, caloriesPerGram, proteinsPerGram, fatsPerGram, carbsPerGram, weight } = meal.mealDto;
                
                const protein = (proteinsPerGram * weight).toFixed(2);
                const fat = (fatsPerGram * weight).toFixed(2);
                const carbs = (carbsPerGram * weight ).toFixed(2);
                const calories = (caloriesPerGram * weight ).toFixed(2);

                return(
                    <MealPlanComponent
                        key = {meal.id}
                        name = {name}
                        ingredients={Object.keys(foodNames)}
                        protein = {protein}
                        fat = {fat}
                        carbs = {carbs}
                        calories = {calories}
                    /> 
                );
            })}
        </div>
    );
};

export default MealList;