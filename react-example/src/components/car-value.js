import React from 'react';
import {useSelector} from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.cost, 0)
  )
  return (
    <div>
      Total Cost: ${totalCost}
    </div>
  );
};

export default CarValue;
