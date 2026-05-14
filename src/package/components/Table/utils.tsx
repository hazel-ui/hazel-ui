/**
 * If data in a column is numeric and no custom Cell render function
 * is provided then add a custom Cell render function to format the numbers
 */
export function processColumns(columns: any[], data: any[]) {
  let columnIndex = 0;
  for (const td of Object.keys(data[0])) {
    if (typeof data[0][td] === "number" && !("Cell" in columns[columnIndex])) {
      columns[columnIndex]["Cell"] = (props: any) => <>{props.value.toLocaleString("en-IN")}</>;
    }
    columnIndex++;
  }
  return columns;
}
