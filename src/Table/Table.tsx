import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

type TableProps = {
  data: { col1: string; col2: string }[];
  columns?: { Header: string; accessor: string }[];
};

export function Table(props: TableProps) {
  /* It's important that we're using React.useMemo here to ensure
   * that our data isn't recreated on every render. If we didn't use
   * React.useMemo, the table would think it was receiving new data on
   * every render and attempt to recalulate a lot of logic every single
   * time. Not cool!
   */

  const data = React.useMemo(() => props.data, [props.data]);
  const columns = React.useMemo(() => props.columns, [props.columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // https://github.com/tannerlinsley/react-table/discussions/2664
    // @ts-ignore
  } = useTable({ columns, data });

  return (
    // apply the table props
    <TableContainer {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup: any) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column: any) => (
                  // Apply the header cell props
                  <Th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </Th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row: any) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell: any) => {
                    // Apply the cell props
                    return (
                      <Td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </Td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  border: 1px solid olive;
`;

const Th = styled.th`
  border-bottom: 3px solid maroon;
  background: aliceblue;
  color: black;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid DarkBlue;
  background: PapayaWhip;
`;
