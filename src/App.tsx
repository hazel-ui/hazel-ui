import React from "react";

import { Table } from "./components/Table";

export function App() {
  return (
    <>
      <header>
        <p>Custom React table component</p>
        <Table data={tableData} columns={tableColumns} enableSorting />
      </header>
    </>
  );
}

const tableData = [
  {
    col1: "Hello",
    col2: 30.1,
    subRows: [
      {
        col1: "Jan",
        col2: 5.2,
      },
      {
        col1: "Feb",
        col2: 6,
      },
    ],
  },
  {
    col1: "react-table",
    col2: 20,
    subRows: [
      {
        col1: "Jan",
        col2: 5,
      },
      {
        col1: "Feb",
        col2: 6,
      },
    ],
  },
  {
    col1: "whatever",
    col2: 100,
  },
];

const tableColumns = [
  {
    Header: "Column 1",
    accessor: "col1", // accessor is the "key" in the data
    Cell: (props: any) =>
      /* Use the row.canExpand and row.getToggleRowExpandedProps
       * prop getter to build the toggle for expanding a row
       */
      props.row.canExpand ? (
        <span
          {...props.row.getToggleRowExpandedProps({
            style: {},
          })}
        >
          {props.row.isExpanded ? "👇" : "👉"} &nbsp;{props.value}
        </span>
      ) : (
        <span
          style={{
            // We can use the row.depth property
            // and paddingLeft to indicate the depth
            // of the row
            paddingLeft: `${props.row.depth * 2}rem`,
          }}
        >
          {props.value}
        </span>
      ),
  },
  {
    Header: "Column 2",
    accessor: "col2",
  },
];
