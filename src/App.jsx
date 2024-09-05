import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import MealPlan from './components/MainSections/MealPlan/MealPlan.jsx';
import HomePage from './components/AccessPages/HomePage/HomePage.js';
import LoginPageContainer from './containers/LoginPageContainer.js';
import RegistrationPage from './components/AccessPages/RegistrationPage/RegistrationPage.js'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPageContainer />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/:slug/mealplan" element={<Layout />}>
                    <Route index element={<MealPlan />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
