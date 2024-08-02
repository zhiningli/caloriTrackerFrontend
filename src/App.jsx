import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Components/Layout/Layout';
import MealPlan from './components/Components/MainSections/MealPlan/MealPlan.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Layout />}>
                    <Route index element={<Navigate to="mealplan" />} />
                    <Route path="mealplan" element={<MealPlan />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
