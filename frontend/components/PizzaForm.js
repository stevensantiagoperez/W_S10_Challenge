import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFullName, setSize, toggleTopping } from '../state/slices/formSlice';
import { submitOrder } from '../state/slices/formSlice';

const toppingsList = [
  { id: '1', name: 'Pepperoni', testId: 'checkPepperoni' },
  { id: '2', name: 'Green Peppers', testId: 'checkGreenpeppers' },
  { id: '3', name: 'Pineapple', testId: 'checkPineapple' },
  { id: '4', name: 'Mushrooms', testId: 'checkMushrooms' },
  { id: '5', name: 'Ham', testId: 'checkHam' }
];

const PizzaForm = () => {
  const dispatch = useDispatch();
  const { fullName, size, toppings, isSubmitting, error } = useSelector(state => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newOrder = {
      id: Date.now(), // Unique ID
      fullName, // From state
      size,
      toppings
    };
  
    console.log("Submitting order:", newOrder); // Debugging log
    
    dispatch(submitOrder(newOrder)); // Pass order data to Redux
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Your Pizza</h2>
      {error && <div className="error">{error}</div>}
      {isSubmitting && <div>Order in progress...</div>}
      
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          data-testid="fullNameInput"
          value={fullName}
          onChange={(e) => dispatch(setFullName(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="size">Size:</label>
        <select
          id="size"
          data-testid="sizeSelect"
          value={size}
          onChange={(e) => dispatch(setSize(e.target.value))}
        >
          <option value="">Choose a size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>

      <div>
        <p>Toppings:</p>
        {toppingsList.map(topping => (
          <div key={topping.id}>
            <input
              type="checkbox"
              data-testid={topping.testId}
              id={`topping-${topping.id}`}
              checked={toppings.includes(topping.id)}
              onChange={() => dispatch(toggleTopping(topping.id))}
            />
            <label htmlFor={`topping-${topping.id}`}>{topping.name}</label>
          </div>
        ))}
      </div>

      <button
        type="submit"
        data-testid="submit"
        disabled={isSubmitting}
      >
        Submit Order
      </button>
    </form>
  );
};

export default PizzaForm;