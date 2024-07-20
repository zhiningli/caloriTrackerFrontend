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
    <div className='MealPlanPage'>
      <Sidebar />
      <header className='App-header'>
        <h1>Calorie Tracker</h1>
        <button className='action-button' onClick={handleCreateNewMeals}>
          Create New Meals
        </button>
        {showShoppingList && <ShoppingList />}
        <button className='action-button' onClick={() => alert('Record Meals clicked!')}>
          Record Meals You Have Eaten
        </button>
      </header>
    </div>
  );
}

export default MealPlanPage;
