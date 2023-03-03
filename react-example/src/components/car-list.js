import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "./button/button";
import {removeCar} from "../store";
import './car-list.scss'

const CarList = () => {
  const dispatch = useDispatch();

  const {cars, nameAboutToBeCreated} = useSelector(({carCreationForm, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      cars: filteredCars,
      nameAboutToBeCreated: carCreationForm.name
    }
  });

  const handleCarDelete = car => {
    dispatch(removeCar(car.id))
  }
  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CARE SHOULD BE BOLD
    const bold = nameAboutToBeCreated && car.name.toLowerCase().includes(nameAboutToBeCreated.toLowerCase());
    return (
      <div key={car.id}>
        <p className={bold ? 'bold-car' : ''}>
          {car.name} - ${car.cost}
        </p>
        <Button onClick={() => handleCarDelete(car)}>
          Delete
        </Button>
      </div>
    )
  })
  return (
    <div>
      {renderedCars}
      <hr/>
    </div>
  );
};

export default CarList;
