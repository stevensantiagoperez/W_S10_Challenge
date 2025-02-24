import React from "react";
import PizzaForm from "./PizzaForm";
import OrderList from "./OrderList";

function App() {
  return (
    <div className="container">
      <h1>Pizza Form</h1>
      <PizzaForm />
      <h2>Pizza Orders</h2>
      <OrderList />
      <footer>© Bloom Institute of Technology 2025</footer>
    </div>
  );
}

export default App;
