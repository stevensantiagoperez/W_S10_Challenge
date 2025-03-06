import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderItem from './OrderItem';
import FilterButtons from './FilterButtons';
import { fetchOrders } from '../state/slices/ordersSlice'; // Make sure this action exists

function OrderList() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(state => state.orders);
  const sizeFilter = useSelector(state => state.sizeFilter);

  // Fetch orders when component mounts
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux Orders:", orders);
  }, [orders]);

  // Filter orders based on selected size
  const filteredOrders = sizeFilter === 'All' 
    ? orders 
    : orders.filter(order => order.size === sizeFilter);

  return (
    <div>
      <h2>Order History</h2>
      <FilterButtons />  {/* ✅ Ensure FilterButtons always renders */}

      {/* ✅ Show loading message while fetching orders */}
      {loading && <p>Loading orders...</p>}
      {error && <p>Error loading orders: {error}</p>}

      {/* ✅ Ensure orders display when loaded */}
      {!loading && !error && filteredOrders.length > 0 ? (
        filteredOrders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))
      ) : (
        !loading && <p>No orders found.</p>
      )}
    </div>
  );
}

export default OrderList;
