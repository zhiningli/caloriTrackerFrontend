import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ShoppingList from './ShoppingList';
import './HomePage.css';

function HomePage() {
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCreateNewMeals = () => {
    setShowShoppingList(true);
  };

  return (
    <div className='HomePage'>
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

export default HomePage;
