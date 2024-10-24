import React, { useState, useEffect } from 'react';
import MealTicket from './MealTicket/MealTicket';
import { MealDisplayColumnContainer } from './MealDisplayColumn.styles';
import { getNutritions } from '../../../../utils/nutritionUtil';
import { filterMealsByDate } from '../EditMealUtil';

const MealDisplayColumn = ({ date, currentMeals, newMeals, deleteMeals, updatedMeals, onTicketClick }) => {

    console.log('currentMeals: ', currentMeals);
    console.log('newMeals: ', newMeals);
    console.log('updateMeals', updatedMeals);
    console.log('deletedMeals', deleteMeals);

    const getCalories = (meal) => (meal.caloriesPerGram * meal.weight).toFixed(0);
    const getProteins = (meal) => (meal.proteinsPerGram * meal.weight).toFixed(0);
    const getFats = (meal) => (meal.fatsPerGram * meal.weight).toFixed(0);
    const getCarbs = (meal) => (meal.carbsPerGram * meal.weight).toFixed(0);
    const getIngredients = (meal) => Object.keys(meal.foodNames);

    const [newMealsWithNutrition, setNewMealsWithNutrition] = useState([]);
    const [deleteMealsWithNutrition, setDeleteMealsWithNutrition] = useState([]);

    useEffect(() => {
        const fetchNutritionForNewMeals = async () => {
            const filteredNewMeals = filterMealsByDate(newMeals, date);
            const filteredUpdatedMeals = filterMealsByDate(updatedMeals, date);

            const mealLackNutritionInfo = filteredNewMeals.concat(filteredUpdatedMeals);
            const mealsWithNutrition = await Promise.all(mealLackNutritionInfo.map(async (meal) => {
                const nutrition = await getNutritions(meal);
                return {
                    ...meal,
                    ...nutrition,
                };
            }));
            setNewMealsWithNutrition(mealsWithNutrition);
        };

        if (newMeals.length === 0 && updatedMeals.length === 0) {
            setNewMealsWithNutrition([]);
        } else {
            fetchNutritionForNewMeals();
        }
    }, [newMeals, updatedMeals, date]); 

    useEffect(() => {
        const fetchNutritionForDeleteMeals = async () => {
            const filteredDeleteMeals = filterMealsByDate(deleteMeals, date);

            const mealsWithNutrition = await Promise.all(filteredDeleteMeals.map(async (meal) => {
                const nutrition = await getNutritions(meal);
                return {
                    ...meal,
                    ...nutrition,
                };
            }));
            setDeleteMealsWithNutrition(mealsWithNutrition);
        };

        if (deleteMeals.length === 0) {
            setDeleteMealsWithNutrition([]);
        } else {
            fetchNutritionForDeleteMeals();
        }
    }, [deleteMeals, date]);  // Add 'date' as a dependency here

    const filteredCurrentMeals = filterMealsByDate(currentMeals, date);

    return (
        <MealDisplayColumnContainer>
            <h3 style={{ marginBottom: '10px' }}>Meal plans for {date}</h3>
            <div>
                {filteredCurrentMeals.length > 0 && (
                    filteredCurrentMeals.map((meal, index) => (
                        <MealTicket
                            key={`currentMeal-${index}`}
                            name={meal.name}
                            category={meal.category}
                            calories={getCalories(meal)}
                            proteins={getProteins(meal)}
                            fats={getFats(meal)}
                            carbs={getCarbs(meal)}
                            ingredients={getIngredients(meal)}
                            onTicketClick={() => onTicketClick(meal.id)}
                        />
                    ))
                )}
    
                {newMealsWithNutrition.length > 0 && (
                    newMealsWithNutrition.map((meal, index) => (
                        <MealTicket
                            key={`updatedMeal-${index}`}
                            name={meal.name}
                            category={meal.category}
                            calories={meal.calories} 
                            proteins={meal.proteins} 
                            fats={meal.fats}     
                            carbs={meal.carbs}     
                            ingredients={getIngredients(meal)}
                            onTicketClick={() => onTicketClick(meal.id)}
                            status={"new"}
                        />
                    ))
                )}
    
                {deleteMealsWithNutrition.length > 0 && (
                    deleteMealsWithNutrition.map((meal, index) => (
                        <MealTicket
                            key={`deleteMeal-${index}`}
                            name={meal.name}
                            category={meal.category}
                            calories={meal.calories}
                            proteins={meal.proteins}
                            fats={meal.fats}
                            carbs={meal.carbs}
                            ingredients={getIngredients(meal)}
                            onTicketClick={() => onTicketClick(meal.id)}
                            status={"delete-pending"}
                        />
                    ))
                )}
            </div>
        </MealDisplayColumnContainer>
    );
};

export default MealDisplayColumn;
