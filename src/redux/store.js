import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';

export const store = configureStore({
    reducer: {
        meals: mealReducer,
    }
});