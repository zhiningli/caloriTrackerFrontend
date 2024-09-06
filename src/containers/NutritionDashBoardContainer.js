import React from 'react';
import { useSelector } from 'react-redux';
import MealPlanDashboard from '../components/MainSections/Dashboard/NutritionDashboard/MealPlanDashboard';

const NutritionDashboardContainer = () => {

    const meals = useSelector( (state) => state.meals.meals);

    const aggregateValues = meals.reduce((acc, meal) => {
        let mealDto = meal.mealDto;
        acc.proteins += mealDto.proteinsPerGram * mealDto.weight;
        acc.fats += mealDto.fatsPerGram * mealDto.weight;
        acc.carbs += mealDto.carbsPerGram * mealDto.weight ;
        acc.calories += mealDto.caloriesPerGram * mealDto.weight;
        return acc;
    },{
        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0
    });

    console.log(aggregateValues)

    return (
        <MealPlanDashboard 
            proteins={aggregateValues.proteins} 
            fats={aggregateValues.fats} 
            carbs={aggregateValues.carbs} 
            calories={aggregateValues.calories}
        />
    )
}

export default NutritionDashboardContainer;