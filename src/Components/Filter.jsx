import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredData, getData } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const category = e.target.value;

    dispatch(filteredData(category));
    dispatch(getData(category))
  };

  return (
    <div
      style={{
        border: "5px solid black",
        width: "20%",
        height: "90vh",
        margin: "20px",
      }}
    >
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onClick={handleFilter} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onClick={handleFilter} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onClick={handleFilter} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
