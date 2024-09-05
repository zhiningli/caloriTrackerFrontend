import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';
import useReducer from './userSlice';

export const store = configureStore({
    reducer: {
        meals: mealReducer,
        user: useReducer,
    }
});