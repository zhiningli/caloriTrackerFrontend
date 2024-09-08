import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        currentMeals: [],
        newMeals: []
    },
    reducers:{
        setMeals: (state, action) => {
            console.log(action);
            state.currentMeals = action.payload;
            console.log(state.currentMeals);
        },
        addMeal: (state, action) => {
            state.newMeals = [...state.newMeals, action.payload]; 
        },
        clearMeal: (state, action) => {
            state.newMeals = [];
        },
    }
});

export const { setMeals, addMeal, clearMeal } = mealSlice.actions;
export default mealSlice.reducer;