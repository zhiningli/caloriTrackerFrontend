export const filterMealsByDate = (meals, date) => {
    return meals.filter(meal => meal.consumptionDate === date);
}