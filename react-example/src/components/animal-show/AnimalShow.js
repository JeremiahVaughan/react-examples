import './AnimalShow.css'
import turtle from './turtle.svg'
import whale from './whale.svg'
import heart from './heart.svg'
import {useState} from "react";

const svgMap = {
  turtle,
  whale
}


function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0)

  function handleClick() {
    setClicks(clicks + 1)
  }

  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt='animal' src={svgMap[type]}/>
      <img className='heart'
        alt='heart'
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
