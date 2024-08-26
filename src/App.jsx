import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Components/Layout/Layout';
import MealPlan from './components/Components/MainSections/MealPlan/MealPlan.jsx';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
// Assuming you also have a RegisterPage component
import RegistrationPage from './components/RegistrationPage'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/mealplan" element={<Layout />}>
                    <Route index element={<MealPlan />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
