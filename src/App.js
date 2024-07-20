import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ShoppingList from './components/ShoppingList';

function App() {
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCreateNewMeals = () => {
    setShowShoppingList(true);
  };

  return (
    <div className='App'>
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

export default App;
