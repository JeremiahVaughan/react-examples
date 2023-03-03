import './drop-down.scss'
import {useEffect, useRef, useState} from "react";
import {downChevron} from "../../constants/icons";
import Icon from "../icon";

function DropDown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(value)
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler)
  }, []);

  function handleOptionClick(option) {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map(option => {
    return <div className="option" onClick={() => handleOptionClick(option)} key={option.value}>
      {option.label}
    </div>
  })

  return (
    <div ref={divEl} className="drop-down">
      <div className="selected-value disable-text-highlight" onClick={() => setIsOpen(!isOpen)}>
        <span className="selected-value-text">{value?.label || 'Select...'}</span>
        <span className="selected-value-svgIcon">
          <Icon svg={downChevron}/>
        </span>
      </div>
      <div className="options">{isOpen && renderedOptions}</div>
    </div>
  );
}

export default DropDown;
