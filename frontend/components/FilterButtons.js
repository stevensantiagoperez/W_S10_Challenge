import React from "react";
import { useDispatch } from "react-redux";
import { setSizeFilter } from "../state/filterSlice"; // ✅ FIXED: Correct import path

function FilterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Filter by size:</p>
      <button onClick={() => dispatch(setSizeFilter("All"))}>All</button>
      <button onClick={() => dispatch(setSizeFilter("S"))}>S</button>
      <button onClick={() => dispatch(setSizeFilter("M"))}>M</button>
      <button onClick={() => dispatch(setSizeFilter("L"))}>L</button>
    </div>
  );
}

export default FilterButtons;
