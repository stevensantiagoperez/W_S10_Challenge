import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPizzaOrder } from '../state/ordersSlice';

export default function PizzaForm() {
  const dispatch = useDispatch();
  const [pizzaOrder, setPizzaOrder] = useState({
    name: '',
    size: 'M',  // Default size: Medium
    toppings: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizzaOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleToppingsChange = (e) => {
    const { value } = e.target;
    setPizzaOrder((prevState) => ({
      ...prevState,
      toppings: prevState.toppings.includes(value)
        ? prevState.toppings.filter((topping) => topping !== value)
        : [...prevState.toppings, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the action to add the pizza order
    dispatch(addPizzaOrder(pizzaOrder));

    // Reset the form after submission
    setPizzaOrder({ name: '', size: 'M', toppings: [] });
  };

  return (
    <div className="pizza-form">
      <h2>Pizza Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={pizzaOrder.name}
          onChange={handleChange}
          required
        />
        <label>Size:</label>
        <select
          name="size"
          value={pizzaOrder.size}
          onChange={handleChange}
        >
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <label>Toppings:</label>
        <div>
          {['Pepperoni', 'Green Peppers', 'Pineapple', 'Mushrooms', 'Ham'].map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                name="toppings"
                value={topping}
                onChange={handleToppingsChange}
              />
              {topping}
            </label>
          ))}
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
