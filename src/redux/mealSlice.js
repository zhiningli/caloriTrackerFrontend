import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        currentMeals: [],
        newMeals: [],
        deleteMeals: [],
        updatedMeals: [],
    },
    reducers: {
        setMeals: (state, action) => {
            state.currentMeals = action.payload;
            console.log(state.currentMeals);
        },
        addMeal: (state, action) => {
            state.newMeals = [...state.newMeals, action.payload]; 
        },
        clearMeal: (state, action) => {
            state.newMeals = [];
            state.updatedMeals = [];
        },
        removeMeal: (state, action) => {
            state.currentMeals = state.currentMeals.filter((meal) => meal.id !== action.payload.id);
            state.updatedMeals= state.updatedMeals.filter((meal) => meal.id !== action.payload.id);
            state.newMeals= state.newMeals.filter((meal) => meal.id !== action.payload.id);
            state.deleteMeals = [...state.deleteMeals, action.payload];
            console.log(state.currentMeals);
            console.log(state.updatedMeals);
        },
        updateMeal: (state, action) => {
            state.currentMeals = state.currentMeals.filter((meal) => meal.id !== action.payload.id);
            state.updatedMeals= state.updatedMeals.filter((meal) => meal.id !== action.payload.id);
            state.newMeals= state.newMeals.filter((meal) => meal.id !== action.payload.id);
            state.updatedMeals= [...state.updatedMeals, action.payload];

        }
    }
});

export const { setMeals, addMeal, clearMeal, removeMeal, updateMeal } = mealSlice.actions;
export default mealSlice.reducer;