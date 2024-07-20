import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MealPlanPage from './components/MealPlanPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mealplan" element={<MealPlanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
