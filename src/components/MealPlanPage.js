import React, { useState } from 'react';
import Sidebar from './Gadgets/Sidebar';
import ShoppingList from './Gadgets/ShoppingList';
import './MealPlanPage.css';

function MealPlanPage() {
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCreateNewMeals = () => {
    setShowShoppingList(true);
  };

  return (
    <div className='meal-plan-page'>
      <nav className='navbar'>
        <h1>Calorie Tracker</h1>
      </nav>
      <div className='main-content'>
        <Sidebar />
        <div className='content'>
          <div className='meal-plan-section'>
            <h2>Ongoing Meal Plan</h2>
            <p>You have no meal planned today</p>
          </div>
          <div className='action-section'>
            <button className='action-button' onClick={handleCreateNewMeals}>
              Create New Meals
            </button>
            {showShoppingList && <ShoppingList />}
            <button className='action-button' onClick={() => alert('Record Meals clicked!')}>
              Record Meals You Have Eaten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealPlanPage;
