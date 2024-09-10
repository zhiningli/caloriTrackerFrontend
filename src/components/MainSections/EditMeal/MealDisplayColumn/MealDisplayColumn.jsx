import React from 'react';
import MealTicket from './MealTicket/MealTicket';
import { MealDisplayColumnContainer } from './MealDisplayColumn.styles';

const MealDisplayColumn = ({ currentMeals, newMeals, deleteMeals, onTicketClick }) => {
    const getCalories = (meal) => (meal.caloriesPerGram * meal.weight).toFixed(0);
    const getProteins = (meal) => (meal.proteinsPerGram * meal.weight).toFixed(0);
    const getFats = (meal) => (meal.fatsPerGram * meal.weight).toFixed(0);
    const getCarbs = (meal) => (meal.carbsPerGram * meal.weight).toFixed(0);
    const getIngredients = (meal) => Object.keys(meal.foodNames);

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

                {newMeals.length > 0 && (
                    newMeals.map((meal, index) => (
                        <MealTicket
                            key={`newMeal-${index}`}
                            name={meal.name}
                            category={meal.category}
                            calories={getCalories(meal)}
                            proteins={getProteins(meal)}
                            fats={getFats(meal)}
                            carbs={getCarbs(meal)}
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
