import axios from 'axios';
import { formatDate, getNow } from '../../../../utils/dateUtil';

export const formatFoodNames = (foodNames) => {
    return foodNames.reduce((acc, foodItem) => {
        acc[foodItem.name] = parseFloat(foodItem.quantity);
        return acc;
    }, {});
};

export const formatMealData = (data) => {

    const formattedData = {
        ...data,
        consumptionDate: formatDate(data.consumptionDate),
        foodNames: formatFoodNames(data.foodNames),
        timeStamp: getNow(),
    }
    return formattedData;
};

export const handleAddMeal = (data, dispatch, addMeal) => {
    const formattedData = formatMealData(data);
    dispatch(addMeal(formattedData));
};

export const handleRemoveMeal = (data, dispatch, removeMeal) => {
    const formattedData = formatMealData(data);
    dispatch(removeMeal(formattedData));
};

export const handleSubmitMeals = async (newMeals, currentMeals, slug, token, dispatch, setMeals, clearMeal) => {
    if (newMeals.length === 0) {
        alert("No new meals to save");
        return;
    }

    try {
        const response = await axios.post(
            `http://localhost:8080/api/${slug}/meals/createMealsByBatch`,
            newMeals,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const savedMeal = response.data.map((meal) => meal.mealDto);
        console.log('savedMeal returned from the backend', savedMeal);
        dispatch(setMeals([...currentMeals, ...savedMeal]));
        dispatch(clearMeal());
    } catch (error) {
        console.error('Error saving meals: ', error);
        alert('Meal save failed. Please refer to the console for bug information');
    }
};
