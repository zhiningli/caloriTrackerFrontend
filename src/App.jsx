import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

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
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPageContainer />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route
                    path="/:slug/"
                    element={
                        <PrivateRoute>
                            <Layout />
                        </PrivateRoute>
                    }
                >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="nutritionalGoal" element={<SetNutritionalGoal />} />
                    <Route path="editMeal" element={<EditMeal />} />
                    <Route path="updateHealthData" element={<UpdateHealthData />} />
                    <Route path="accountSettings" element={<AccountSettings />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="about" element={<AboutApp />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
