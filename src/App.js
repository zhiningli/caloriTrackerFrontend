import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Sidebar from './components/Sidebar';


function App() {
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCreateNewMeals = () => {
    setShowShoppingList(true);
  };

  return (
    <div className='App'>
      <Sidebar />
      <div className='main-content'>
        <header className='App-header'>
          <h1>Calorie Tracker</h1>
        </header>
        <button className='action-button' onClick={handleCreateNewMeals}>
          Create New Meals
        </button>
        {showShoppingList && <ShoppingList />}
        <button
          className='action-button'
          onClick={() => alert('Record Meals clicked!')}
        >
        Record Meals You Have Eaten
        </button>
      </div>
    </div>
  );
}

export default App;
