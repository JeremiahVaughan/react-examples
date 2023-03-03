import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCar, changeCost, changeName} from "../store";
import Button from "./button/button";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.carCreationForm.name,
      cost: state.carCreationForm.cost
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  }

  const handleCostChange = event => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addCar({name, cost}))
  }

  return (
    <div>
      <h4>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            value={cost || ''}
            type="number"
            onChange={handleCostChange}
          />
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
