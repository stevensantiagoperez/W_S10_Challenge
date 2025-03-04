import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import FilterButtons from './FilterButtons';

function OrderList() {
  const { orders, loading, error } = useSelector(state => state.orders);
  const sizeFilter = useSelector(state => state.sizeFilter);

  const filteredOrders = sizeFilter === 'All' 
    ? orders 
    : orders.filter(order => order.size === sizeFilter);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>Error loading orders: {error}</div>;

  return (
    <div>
      <h2>Order History</h2>
      <FilterButtons />
      {filteredOrders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;