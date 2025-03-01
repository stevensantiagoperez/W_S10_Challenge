<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../state/slices/ordersSlice';
import { setSizeFilter } from '../state/slices/sizeFilterSlice';

const getToppingName = (id) => {
  const toppings = {
    '1': 'Pepperoni',
    '2': 'Green Peppers',
    '3': 'Pineapple',
    '4': 'Mushrooms',
    '5': 'Ham',
  };
  return toppings[id] || 'Unknown';
};

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => {
    const allOrders = state.orders.orders;
    const filter = state.sizeFilter;
    return filter === 'All' ? allOrders : allOrders.filter(order => order.size === filter);
  });
  const loading = useSelector(state => state.orders.loading);
  const error = useSelector(state => state.orders.error);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // Add loading state handling to prevent empty renders
if (loading) return <div>Loading orders...</div>;
if (error) return <div>Error loading orders: {error}</div>;

  return (
    <div>
      <h2>Order History</h2>
      <div>
        <button data-testid="filterBtnAll" onClick={() => dispatch(setSizeFilter('All'))}>All</button>
        <button data-testid="filterBtnS" onClick={() => dispatch(setSizeFilter('S'))}>S</button>
        <button data-testid="filterBtnM" onClick={() => dispatch(setSizeFilter('M'))}>M</button>
        <button data-testid="filterBtnL" onClick={() => dispatch(setSizeFilter('L'))}>L</button>
      </div>
      {orders.map((order, index) => (
        <div key={order.id} data-testid={`order-${index}`} >
          <div key={order.id}>
          <h3>{order.fullName}s Order</h3>
          <p>Size: {order.size}</p>
          <p>Toppings: {order.toppings.length > 0 
            ? order.toppings.map(id => getToppingName(id)).join(', ') 
            : 'None'}</p>
          <p>Price: ${order.price?.toFixed(2)}</p>
        </div>

       </div>
      ))}
    </div>
  );
};

export default OrderList;
=======
import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import FilterButtons from "./FilterButtons";

function OrderList() {
  const orders = useSelector((state) => state.orders);
  const filter = useSelector((state) => state.filter);

  const filteredOrders = filter === "All"
    ? orders
    : orders.filter(order => order.size === filter);

  return (
    <div>
      <FilterButtons />
      {filteredOrders.length ? (
        filteredOrders.map((order, index) => <OrderItem key={index} order={order} />)
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
}

export default OrderList;
>>>>>>> 9bc8fd3b8337318cd1127ddf5f2aee2aada96bd5
