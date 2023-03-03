import Table from "../table/table";
import {downArrow, upArrow} from "../../constants/icons";
import './sortable-table.scss'
import useSort from "../../hooks/use-sort";
import Icon from "../icon";

function SortableTable(props) {
  const {config, data} = props;

  const {
    sortOrder,
    sortBy,
    sort,
    sortedData
  } = useSort(config, data);

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th onClick={() => sort(column.label)}>
        <div className="sort-header">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  })


  return <Table {...props} data={sortedData} config={updatedConfig}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy || sortOrder === null) {
    return <div className="sort-arrows"><Icon svg={upArrow}/><Icon svg={downArrow}/></div>;
  }

  return <Icon svg={sortOrder === 'asc' ? upArrow : downArrow}/>;
}

export default SortableTable;
