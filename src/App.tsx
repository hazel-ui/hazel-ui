import React from "react";

import { Table } from "./components";

export function App() {
  return (
    <>
      <Table
        columns={[
          {
            Header: "Title",
            accessor: "col0",
          },
          {
            Header: "Header 1",
            accessor: "col1",
          },
        ]}
        data={[
          {
            col0: "Label 1",
            col1: 30.1,
          },
          {
            col0: "Label 2",
            col1: 20,
          },
        ]}
      />
    </>
  );
}
