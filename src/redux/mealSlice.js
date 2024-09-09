import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        currentMeals: [],
        newMeals: [],
        deleteMeals: [],
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
        },
        removeMeal: (state, action) => {
            const removedMeal = state.currentMeals[action.payload];
            state.deleteMeals = [...state.deleteMeals, removedMeal];
            state.currentMeals = state.currentMeals.filter((meal, index) => index !== action.payload);
        }
    }
});

export const { setMeals, addMeal, clearMeal, removeMeal } = mealSlice.actions;
export default mealSlice.reducer;