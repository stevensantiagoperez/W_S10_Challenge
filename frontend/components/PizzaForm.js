<<<<<<< HEAD
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFullName, setSize, toggleTopping } from '../state/slices/formSlice';
import { submitOrder } from '../state/slices/formSlice';

const toppingsList = [
  { id: '1', name: 'Pepperoni', testId: 'checkPepperoni' },
  { id: '2', name: 'Green Peppers', testId: 'checkgreenpeppers' },
  { id: '3', name: 'Pineapple', testId: 'checkPineapple' },
  { id: '4', name: 'Mushrooms', testId: 'checkMushrooms' },
  { id: '5', name: 'Ham', testId: 'checkHam' }
];

console.log('Green Peppers test ID:', toppingsList[1].testId);

const PizzaForm = () => {
  const dispatch = useDispatch();
  const { fullName, size, toppings, isSubmitting, error } = useSelector(state => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitOrder());
=======
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../state/orderSlice"; // Make sure this path is correct

function PizzaForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ fullName: "", size: "", toppings: [] });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      toppings: checked
        ? [...prev.toppings, value]
        : prev.toppings.filter((t) => t !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrder(formData)); // Dispatch Redux action
    setFormData({ fullName: "", size: "", toppings: [] }); // Reset form
>>>>>>> 9bc8fd3b8337318cd1127ddf5f2aee2aada96bd5
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
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
      data-testid={topping.testId} // ONLY THIS ONE SHOULD EXIST
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
=======
      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        placeholder="Type full name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label>Size</label>
      <select name="size" value={formData.size} onChange={handleChange}>
        <option value="">----Choose size----</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>

      <fieldset>
        <legend>Toppings</legend>
        <label><input type="checkbox" value="1" onChange={handleCheckboxChange} /> Pepperoni</label>
        <label><input type="checkbox" value="2" onChange={handleCheckboxChange} /> Green Peppers</label>
        <label><input type="checkbox" value="3" onChange={handleCheckboxChange} /> Pineapple</label>
        <label><input type="checkbox" value="4" onChange={handleCheckboxChange} /> Mushrooms</label>
        <label><input type="checkbox" value="5" onChange={handleCheckboxChange} /> Ham</label>
      </fieldset>

      <button type="submit">Order</button>
    </form>
  );
}

export default PizzaForm;
>>>>>>> 9bc8fd3b8337318cd1127ddf5f2aee2aada96bd5
