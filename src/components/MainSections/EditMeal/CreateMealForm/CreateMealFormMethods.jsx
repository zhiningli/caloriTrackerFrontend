import axios from 'axios';
import { formatDate, getNow } from '../../../../utils/dateUtil';
import { getFoodNutritionalInfoFromIndexedDB } from '../../../../utils/indexedDBUtil';
import { addMeal, clearMeal, setMeals, updateMeal, removeMeal } from '../../../../redux/mealSlice';


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


export const handleAddFood = (append) => {
    append({ name: '', quantity: 0 });
};

export const handleDeleteFood = (remove, index) => {
    remove(index);
};

export const handleAddMeal = (data, dispatch) => {
    const formattedData = formatMealData(data);
    dispatch(addMeal(formattedData));
};

export const handleAddNewMeal = (MealForm, setSelectedMeal) => {
    MealForm.reset({
        name: '',
        category: 'COMPOSITE',
        consumptionDate: '',
        consumptionTime: '',
        foodNames: [{ name: '', quantity: 0 }],
    });
    setSelectedMeal(null);
};

export const handleUpdateMeal = (data, selectedID, dispatch) => {
    const formattedData = formatMealData(data);
    const formattedDataWithID = { ...formattedData, id: selectedID };
    console.log(formattedDataWithID);
    dispatch(updateMeal(formattedDataWithID));
}

export const handleRemoveMeal = (data, dispatch) => {
    const formattedData = formatMealData(data);
    dispatch(removeMeal(formattedData));
};

export const handleSubmitMeals = async (newMeals, currentMeals, slug, token, dispatch) => {
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
        dispatch(clearMeal());
        const savedMeal = response.data.map((meal) => meal.mealDto);
        console.log('savedMeal returned from the backend', savedMeal);
        dispatch(setMeals([...currentMeals, ...savedMeal]));

    } catch (error) {
        console.error('Error saving meals: ', error);
        alert('Meal save failed. Please refer to the console for bug information');
    }
};

export const calculateTotalNutrients = async (foodNames, setTotalNutrients) => {
    let totalCalories = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbs = 0;
    const promises = foodNames.map(async (food) => {
        const { quantity, name } = food;
        if (quantity && name) {
            const nutritionalInfo = await getFoodNutritionalInfoFromIndexedDB(name);
            if (nutritionalInfo) {
                const { caloriesPerGram, proteinsPerGram, fatsPerGram, carbsPerGram } = nutritionalInfo;
                totalCalories += caloriesPerGram * quantity;
                totalProteins += proteinsPerGram * quantity;
                totalFats += fatsPerGram * quantity;
                totalCarbs += carbsPerGram * quantity;
            }
        }
    });

    await Promise.all(promises); 

    setTotalNutrients({
        calories: totalCalories,
        proteins: totalProteins,
        fats: totalFats,
        carbs: totalCarbs,
    });
};
