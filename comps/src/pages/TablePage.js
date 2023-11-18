import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

export default function TablePage() {
  const data = [
    { name: "Orange", colour: "bg-orange-500", score: 5 },
    { name: "Apple", colour: "bg-red-500", score: 2 },
    { name: "Lime", colour: "bg-green-500", score: 3 },
    { name: "Banana", colour: "bg-yellow-500", score: 1 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.colour}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
