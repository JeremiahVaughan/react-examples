import DropDown from "../components/drop-down/drop-down";
import {useState} from "react";


function DropDownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option)
  }
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Yellow', value: 'yellow'},
    {label: 'Orange', value: 'orange'},
    {label: 'Purple', value: 'purple'},
    {label: 'Black', value: 'black'},
    {label: 'White', value: 'white'},
    {label: 'Pink', value: 'pink'},
  ]

  window.time3 = performance.now() // todo remove
  window.time2 = performance.now()
  window.time1 = performance.now()
  return (
    <div>
      <DropDown options={options} value={selection} onChange={handleSelect}/>
      <DropDown options={options} value={selection} onChange={handleSelect}/>
      <div>{selection?.label}</div>
    </div>
  );
}

export default DropDownPage;

