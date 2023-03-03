import {useState} from "react";
import "./accordion.scss"
import {downChevron, leftChevron} from "../../constants/icons";
import Icon from "../icon";

function Accordion({items}) {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  let handleClick = (nextIndex) => {
    //  We are using a function instead af setting the value directly, so we compare the most up-to-date value with nextIndex.
    // Otherwise, we may end up in a race condition with batch rendering (intentionally delayed changes to state for the sake of optimization)
    setExpandedIndex((current) => current === nextIndex ? -1 : nextIndex)
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span>
            <Icon svg={isExpanded ? downChevron : leftChevron}/>
    </span>;
    return (
      <div key={item.id} className="item">
        <div onClick={() => handleClick(index)} className="item-label">
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="item-content">{item.content}</div>}
      </div>
    );
  });

  return (
    <div>{renderedItems}</div>
  )
}

export default Accordion;
