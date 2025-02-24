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
  };

  return (
    <form onSubmit={handleSubmit}>
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
