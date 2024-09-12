import React, {useState, useEffect} from 'react';
import MealTicket from './MealTicket/MealTicket';
import { MealDisplayColumnContainer } from './MealDisplayColumn.styles';
import { getNutritions } from '../../../../utils/nutritionUtil';

const MealDisplayColumn = ({ currentMeals, newMeals, deleteMeals, onTicketClick }) => {
    const getCalories = (meal) => (meal.caloriesPerGram * meal.weight).toFixed(0);
    const getProteins = (meal) => (meal.proteinsPerGram * meal.weight).toFixed(0);
    const getFats = (meal) => (meal.fatsPerGram * meal.weight).toFixed(0);
    const getCarbs = (meal) => (meal.carbsPerGram * meal.weight).toFixed(0);
    const getIngredients = (meal) => Object.keys(meal.foodNames);

    const [newMealsWithNutrition, setNewMealsWithNutrition] = useState([]);

    useEffect(() => {
        const fetchNutritionForNewMeals = async () => {
            const mealsWithNutrition = await Promise.all(newMeals.map(async (meal) => {
                const nutrition = await getNutritions(meal);
                return {
                    ...meal,
                    ...nutrition,
                };
            }));
            setNewMealsWithNutrition(mealsWithNutrition);
        };

        if (newMeals.length > 0) {
            fetchNutritionForNewMeals();
        }
    }, [newMeals]);


    return (
        <MealDisplayColumnContainer>
            <h3 style={{ marginBottom: '10px' }}>Meal plans for YYYY-MM-DD</h3>
            <div>
                {currentMeals.length > 0 && (
                    currentMeals.map((meal, index) => (
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
                            key={`newMeal-${index}`}
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

                {deleteMeals.length > 0 && (
                    deleteMeals.map((meal, index) => (
                        <MealTicket
                            key={`deleteMeal-${index}`}
                            name={meal.name}
                            category={meal.category}
                            calories={getCalories(meal)}
                            proteins={getProteins(meal)}
                            fats={getFats(meal)}
                            carbs={getCarbs(meal)}
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
