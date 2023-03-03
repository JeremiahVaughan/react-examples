import CarForm from "../components/car-form";
import CarList from "../components/car-list";
import CarSearch from "../components/car-search";
import CarValue from "../components/car-value";

export function CarsPage() {

  return <div>
    <CarForm/>
    <CarSearch/>
    <CarList/>
    <CarValue/>
  </div>
}
