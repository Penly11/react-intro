import React, { useState } from 'react';

function App() {

  /**
   * Goals:
   *  1. Create a dynamically generated list displaying the names, prices, and in stock statuses of the food items below.
   *  2. Add a search bar and allow the user to filter the list by the name of the item.
   *  3. Add a dropdown to filter the list by in stock status.
   *  4. Add a form that allows the user to add an item to the list.
   *  5. Add a way for a user to delete an item from the list.
   *
   * Functionality is more important than styling.
   */

  const initialFoods = [
    {
      name: 'Cheese',
      price: 3,
      inStock: true
    },
    {
      name: 'Apple',
      price: 4,
      inStock: true
    },
    {
      name: 'Celery',
      price: 2,
      inStock: false
    }
  ];
  return (
    <div>
      <p>
        Delete me!!!
      </p>
    </div>
  );
}

export default App;
