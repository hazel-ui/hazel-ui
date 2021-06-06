import { useMemo } from "react";
import { Column, useExpanded, useSortBy, useTable } from "react-table";
import { Icon } from "../../foundation/Icon";
import { TableContainer, Td, Th, Tr, TrHead } from "./styles";
import { processColumns } from "./utils";

export type TableProps = {
  data: Array<any>;
  columns: Array<Column>;
  enableSorting?: boolean;
  hideHeaders?: boolean;
};

export function Table(props: TableProps) {
  /* It's important that we're using React.useMemo here to ensure
   * that our data isn't recreated on every render. If we didn't use
   * React.useMemo, the table would think it was receiving new data on
   * every render and attempt to recalulate a lot of logic every single
   * time. Not cool!
   */

  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(
    () => processColumns(props.columns, props.data),
    [props.columns, props.data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      // @ts-ignore
      { columns, data, disableSortBy: !props.enableSorting },
      useSortBy,
      useExpanded
    );

  return (
    // apply the table props
    <TableContainer {...getTableProps()}>
      {!props.hideHeaders && (
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup: any) => (
              // Apply the header row props
              <TrHead {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column: any) => (
                    // Apply the header cell props
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                      {/* Add a sort direction indicator */}
                      <span>
                        {props.enableSorting ? (
                          column.isSorted ? (
                            column.isSortedDesc ? (
                              <Icon.SortDown size="1rem" />
                            ) : (
                              <Icon.SortUp size="1rem" />
                            )
                          ) : (
                            <Icon.Sort height="1rem" />
                          )
                        ) : null}
                      </span>
                    </Th>
                  ))
                }
              </TrHead>
            ))
          }
        </thead>
      )}

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

Table.defaultProps = { enableSorting: false, hideHeaders: false };
