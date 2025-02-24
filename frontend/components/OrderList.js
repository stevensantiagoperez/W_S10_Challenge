import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzaHistory, setError, setLoading } from '../state/ordersSlice';

export default function OrderList() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);
  const [sizeFilter, setSizeFilter] = useState('All');

  useEffect(() => {
    const fetchPizzaHistory = async () => {
      dispatch(setLoading()); // Set loading to true
      try {
        const response = await fetch('http://localhost:9009/api/pizza/history');
        const data = await response.json();
        dispatch(setPizzaHistory(data)); // Set pizza history data
      } catch (error) {
        dispatch(setError(error.message)); // Handle error state
      }
    };

    fetchPizzaHistory();
  }, [dispatch]);

  const filteredOrders = sizeFilter === 'All'
    ? orders
    : orders.filter((order) => order.size === sizeFilter);

  return (
    <div className="order-list">
      <h2>Pizza Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ol>
          {filteredOrders.map((order, index) => (
            <li key={index}>
              <div>
                <strong>{order.name}</strong> ordered a size {order.size} with{' '}
                {order.toppings.length === 0
                  ? 'no toppings'
                  : `${order.toppings.length} topping(s): ${order.toppings.join(', ')}`}
              </div>
            </li>
          ))}
        </ol>
      )}
      <div id="sizeFilters">
        <p>Filter by size:</p>
        {['All', 'S', 'M', 'L'].map((size) => (
          <button
            key={size}
            onClick={() => setSizeFilter(size)}
            className={size === sizeFilter ? 'active' : ''}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
