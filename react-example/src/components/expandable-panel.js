import { useState } from 'react';
import {downChevron, leftChevron} from "../constants/icons";
import Icon from "./icon";
import './expandable-panel.scss'

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="expansion-panel-container">
        <div onClick={handleClick} className="icon">
          <Icon svg={expanded ? downChevron : leftChevron}></Icon>
        </div>
        <div>
          {header}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
