import React from "react";

function getFormattedDecimal(valueNum: number): string {
  if (isNaN(valueNum)) return "0";

  return valueNum.toString().replace(".", ",");
}

/**
 * If data in a column is numeric and no custom Cell render function
 * is provided then add a custom Cell render function to format the numbers
 */
export function processColumns(columns: Array<any>, data: Array<any>) {
  let columnIndex = 0;
  for (let td in data[0]) {
    if (typeof data[0][td] === "number" && !("Cell" in columns[columnIndex])) {
      columns[columnIndex]["Cell"] = (props: any) => (
        <>{getFormattedDecimal(props.value)}</>
      );
    }
    columnIndex++;
  }
  return columns;
}
