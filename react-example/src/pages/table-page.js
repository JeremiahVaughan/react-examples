import './table-page.scss'
import SortableTable from "../components/sortable-table/sortable-table";

function TablePage() {
  const data = [
    { name: 'Orange', color: 'orange', score: 5},
    { name: 'Apple', color: 'red', score: 3},
    { name: 'Banana', color: 'yellow', score: 1},
    { name: 'Lime', color: 'green', score: 4},
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    {
      label: 'Color',
      render: (fruit) => fruit.color,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    },
  ]

  const keyFn = (fruit) => {
    return fruit.name;
  }
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>
  )
}

export default TablePage;
