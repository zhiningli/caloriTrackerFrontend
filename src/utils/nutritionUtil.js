import { getFoodNutritionalInfoFromIndexedDB } from "./indexedDBUtil";
export const getNutritions = async (meal) => {
    let totalCalories = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbs = 0;

    for (const [foodName, quantity] of Object.entries(meal.foodNames)) {
        const nutritionalInfo = await getFoodNutritionalInfoFromIndexedDB(foodName);

        if (nutritionalInfo) {
            const { caloriesPerGram, proteinsPerGram, fatsPerGram, carbsPerGram } = nutritionalInfo;

            totalCalories += caloriesPerGram * quantity;
            totalProteins += proteinsPerGram * quantity;
            totalFats += fatsPerGram * quantity;
            totalCarbs += carbsPerGram * quantity;
        }
    }

    return {
        calories: totalCalories.toFixed(0),
        proteins: totalProteins.toFixed(0),
        fats: totalFats.toFixed(0),
        carbs: totalCarbs.toFixed(0),
    };
};
