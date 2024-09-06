import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';

import HomePage from './components/AccessPages/HomePage/HomePage.js';
import LoginPageContainer from './containers/LoginPageContainer.js';
import RegistrationPage from './components/AccessPages/RegistrationPage/RegistrationPage.js';

import Dashboard from './components/MainSections/Dashboard/Dashboard.jsx';
import EditMeal from './components/MainSections/EditMeal/EditMeal.jsx';
import SetNutritionalGoal from './components/MainSections/SetNutritionalGoal/SetNutritionalGoal.jsx';
import UpdateHealthData from './components/MainSections/UpdateHealthData/UpdateHealthData.jsx';
import AccountSettings from './components/MainSections/AccountSettings/AccountSettings.jsx';
import ContactUs from './components/MainSections/ContactUs/ContactUs.jsx';
import AboutApp from './components/MainSections/AboutApp/AboutApp.jsx';

function App() {
    return (
        <Router>
            <Routes>
                {/* Non-slug routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPageContainer />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/about" element={<AboutApp />} />

                {/* Slug-based routes */}
                <Route path="/:slug/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />

                    <Route path="nutritionalGoal" element={<SetNutritionalGoal />} />
                    <Route path="editMeal" element={<EditMeal />} />
                    <Route path="updateHealthData" element={<UpdateHealthData />} />
                    <Route path="accountSettings" element={<AccountSettings />} />

                    <Route path="contact" element={<ContactUs />} />
                </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
