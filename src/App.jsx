import { createBrowserRouter, Navigate, RouterProvider, Route, Routes } from "react-router-dom";
import React from 'react';
import Layout from "./components/Components/Layout/Layout";
import MealPlan from "./components/Components/MainSections/MealPlan/MealPlan.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'mealplan',
                element: <MealPlan />
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

function Root() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Navigate to="mealplan" />} />
                <Route path="mealplan" element={<MealPlan />} />
            </Route>
        </Routes>
    );
}

