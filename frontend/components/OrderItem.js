import React from 'react';

function OrderItem({ order }) {
  const toppingCount = Array.isArray(order.toppings) ? order.toppings.length : 0; // ✅ Handle missing toppings safely

  return (
    <div data-testid={`order-${order.id}`}>
      <p>
        {order.customer} ordered a size {order.size} with{' '}
        {toppingCount > 0 ? `${toppingCount} topping${toppingCount !== 1 ? 's' : ''}` : 'no toppings'}
      </p>
    </div>
  );
}

export default OrderItem;
