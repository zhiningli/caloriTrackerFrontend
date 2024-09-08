import React from 'react';
import { useSelector } from 'react-redux';
import MealPlanDashboard from '../components/MainSections/Dashboard/NutritionDashboard/MealPlanDashboard';

const NutritionDashboardContainer = () => {

    const meals = useSelector( (state) => state.meals.currentMeals);
    console.log(meals);

    const aggregateValues = meals.reduce((acc, meal) => {
        acc.proteins += meal.proteinsPerGram * meal.weight;
        acc.fats += meal.fatsPerGram * meal.weight;
        acc.carbs += meal.carbsPerGram * meal.weight ;
        acc.calories += meal.caloriesPerGram * meal.weight;
        return acc;
    },{
        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0
    });

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