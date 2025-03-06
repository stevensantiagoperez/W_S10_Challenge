import React from "react";
import { useDispatch } from "react-redux";
import { setSizeFilter } from "../state/slices/sizeFilterSlice";

function FilterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Filter by size:</p>
      <button 
        data-testid="filterBtnAll" 
        onClick={() => dispatch(setSizeFilter("All"))}
      >
        All
      </button>
      <button 
        data-testid="filterBtnS" 
        onClick={() => dispatch(setSizeFilter("S"))}
      >
        S
      </button>
      <button 
        data-testid="filterBtnM" 
        onClick={() => dispatch(setSizeFilter("M"))}
      >
        M
      </button>
      <button 
        data-testid="filterBtnL" 
        onClick={() => dispatch(setSizeFilter("L"))}
      >
        L
      </button>
    </div>
  );
}

export default FilterButtons;