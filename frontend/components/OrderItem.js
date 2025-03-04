import React from 'react';

function OrderItem({ order }) {
  return (
    <div>
      <p>
        {order.fullName} ordered a size {order.size} with{' '}
        {order.toppings.length || 'no'} topping
        {order.toppings.length !== 1 ? 's' : ''}
      </p>
    </div>
  );
}

export default OrderItem;