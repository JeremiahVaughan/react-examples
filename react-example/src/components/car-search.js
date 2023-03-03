import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchTerm} from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const handleSearchTermChange = event => {
    dispatch(changeSearchTerm(event.target.value))
  };

  const searchTerm = useSelector((state) => {
    return state.searchTerm;
  });
  return (
    <div>
      <h3>My cars</h3>
      <div>
        <label>Search</label>
        <input
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
