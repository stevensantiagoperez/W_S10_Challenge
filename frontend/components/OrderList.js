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
