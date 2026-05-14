import { useMemo } from "react";
import { useExpanded, useSortBy, useTable } from "react-table";

import { Icon } from "../../foundation/Icon/Icon.js";
import { TableContainer, Td, Th, Tr, TrHead } from "./styles.js";
import { processColumns } from "./utils.js";

import type { Column } from "react-table";

interface TableProps {
  data: any[];
  columns: Column[];
  enableSorting?: boolean;
  hideHeaders?: boolean;
}

function Table(props: TableProps) {
  /* It's important that we're using React.useMemo here to ensure
   * that our data isn't recreated on every render. If we didn't use
   * React.useMemo, the table would think it was receiving new data on
   * every render and attempt to recalulate a lot of logic every single
   * time. Not cool!
   */

  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(
    () => processColumns(props.columns, props.data),
    [props.columns, props.data],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    // @ts-ignore
    { columns, data, disableSortBy: !props.enableSorting },
    useSortBy,
    useExpanded,
  );

  return (
    // Apply the table props
    <TableContainer {...getTableProps()}>
      {!props.hideHeaders && (
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup: any) => {
              const { key: headerGroupKey, ...headerGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                // Apply the header row props
                <TrHead key={headerGroupKey} {...headerGroupProps}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column: any) => {
                      const { key: columnKey, ...columnProps } = column.getHeaderProps(
                        column.getSortByToggleProps(),
                      );
                      return (
                        // Apply the header cell props
                        <Th key={columnKey} {...columnProps}>
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
                      );
                    })
                  }
                </TrHead>
              );
            })
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
            const { key: rowKey, ...rowProps } = row.getRowProps();
            return (
              // Apply the row props
              <Tr key={rowKey} {...rowProps}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell: any) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                    return (
                      <Td key={cellKey} {...cellProps}>
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

export type { TableProps };
export { Table };
