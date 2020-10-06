import React from "react";

import { Table } from "./Table";

export function App() {
  return (
    <>
      <header>
        <p>Custom React table component</p>
        <Table data={tableData} columns={tableColumns} />
      </header>
    </>
  );
}

const tableData = [
  {
    col1: "Hello",
    col2: "World",
  },
  {
    col1: "react-table",
    col2: "rocks",
  },
  {
    col1: "whatever",
    col2: "you want",
  },
];

const tableColumns = [
  {
    Header: "Column 1",
    accessor: "col1", // accessor is the "key" in the data
  },
  {
    Header: "Column 2",
    accessor: "col2",
  },
];
