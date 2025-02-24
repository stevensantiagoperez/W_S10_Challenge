import React from "react";

function OrderItem({ order }) {
  return (
    <p>
      {order.fullName} ordered a size {order.size} with {order.toppings.length} toppings
    </p>
  );
}

export default OrderItem;
