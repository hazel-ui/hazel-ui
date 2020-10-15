import React from "react";
import styled from "styled-components";
import { useTable, Column, useSortBy, useExpanded } from "react-table";
import { Color, MediaQuery, Theme } from "../../foundation";

import { processColumns } from "./utils";

type TableProps = {
  data: Array<any>;
  columns: Array<Column>;
  enableSorting?: boolean;
};

export function Table(props: TableProps) {
  /* It's important that we're using React.useMemo here to ensure
   * that our data isn't recreated on every render. If we didn't use
   * React.useMemo, the table would think it was receiving new data on
   * every render and attempt to recalulate a lot of logic every single
   * time. Not cool!
   */

  const data = React.useMemo(() => props.data, [props.data]);
  const columns = React.useMemo(
    () => processColumns(props.columns, props.data),
    [props.columns, props.data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    // @ts-ignore
    { columns, data, disableSortBy: !props.enableSorting },
    useSortBy,
    useExpanded
  );

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
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
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
              <Tr {...row.getRowProps()}>
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
              </Tr>
            );
          })
        }
      </tbody>
    </TableContainer>
  );
}

Table.defaultProps = { enableSorting: false };

// <table>
const TableContainer = styled.table`
  /* enable scroll on small width */
  display: block;
  overflow: auto;

  ::-webkit-scrollbar {
    /* Remove table scrollbar on webkit browsers */
    /* height: 0px;
    width: 0px; */
  }
`;

const Th = styled.th`
  font-family: ${Theme.font.sansSerif};
  font-weight: ${Theme.fontWeight.semiBold};
  line-height: 1.29;

  height: 100px;
  min-width: 142px;
  padding: 0px 27px;
  background-color: ${Color.lightCyan};

  font-size: 0.9rem;
  text-align: right;

  &:nth-of-type(1) {
    font-size: 1.125rem;
    text-align: left;

    /* make first column header sticky */
    left: 0;
    position: sticky;
  }

  ${MediaQuery.maxWidth.tablet} {
    &:nth-of-type(1) {
      box-shadow: 6px 0px 25px 0px ${Color.floralWhite};
    }
  }
`;

const Td = styled.td`
  font-family: ${Theme.font.sansSerif};
  color: ${Color.midnightBlue};

  padding: 20px 27px;

  font-weight: ${Theme.fontWeight.medium};
  text-align: right;

  &:nth-of-type(1) {
    font-weight: ${Theme.fontWeight.semiBold};
    text-align: left;

    /* make first column body sticky */
    left: 0;
    position: sticky;
  }

  ${MediaQuery.maxWidth.tablet} {
    &:nth-of-type(1) {
      box-shadow: 6px 0px 25px 0px ${Color.floralWhite};
      clip-path: inset(0px -30px 0px 0px);
    }
  }
`;

const Tr = styled.tr`
  &:nth-of-type(odd) td {
    background-color: ${Color.honeyDew};
  }

  &:nth-of-type(even) td {
    background-color: ${Color.azure};
  }
`;
