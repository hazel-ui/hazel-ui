import { Icon } from "../../../foundation/Icon/Icon.js";
import { Table } from "../Table.js";

import type { TableProps } from "../Table.js";
import type { Meta, Story } from "@storybook/react";

const meta = {
  component: Table,
  parameters: {
    componentSubtitle:
      "This component can be used to render a <table> element to display a data table. Optionally, column headers can be hidden and sorting can enabled for each column individually. The render function for each column can be customized and every row can be made expandable to provide additional data.",
  },
  title: "Atoms/Table",
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

const Basic = Template.bind({});
Basic.args = {
  columns: [
    {
      Header: "Title",
      accessor: "col0", // Accessor is the "key" in the data
    },
    {
      Header: "Header 1",
      accessor: "col1",
    },
    {
      Header: "Header 2",
      accessor: "col2",
    },
    {
      Header: "Header 3",
      accessor: "col3",
    },
    {
      Header: "Header 4",
      accessor: "col4",
    },
    {
      Header: "Header 5",
      accessor: "col5",
    },
  ],
  data: [
    {
      col0: "Label 1",
      col1: 0.1,
      col2: 1.2,
      col3: 2.3,
      col4: 3.4,
      col5: 4.5,
    },
    {
      col0: "Label 2",
      col1: 11.22,
      col2: 922.3345,
      col3: 22.33,
      col4: 22.335,
      col5: 123_456.33,
    },
  ],
};

const CustomCells = Template.bind({});
CustomCells.args = {
  columns: [
    {
      Header: "Title",
      accessor: "col0", // Accessor is the "key" in the data
    },
    {
      Cell: (props) => <>$ {props.value}</>,
      Header: "Header 1",
      accessor: "col1",
    },
  ],
  data: [
    {
      col0: "Label 1",
      col1: 30.1,
    },
    {
      col0: "Label 2",
      col1: 20,
    },
  ],
};

const ExpandableRows = Template.bind({});
ExpandableRows.args = {
  columns: [
    {
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
            {props.row.isExpanded ? (
              <Icon.ChevronDown size="1.3rem" />
            ) : (
              <Icon.ChevronRight size="1.3rem" />
            )}{" "}
            &nbsp;{props.value}
          </span>
        ) : (
          <span
            style={{
              // We can use the row.depth property
              // And paddingLeft to indicate the depth
              // Of the row
              paddingLeft: `${props.row.depth * 2}rem`,
            }}
          >
            {props.value}
          </span>
        ),
      Header: "Column 1",
      accessor: "col1", // Accessor is the "key" in the data
    },
    {
      Header: "Column 2",
      accessor: "col2",
    },
  ],
  data: [
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
  ],
};

export { Basic, CustomCells, ExpandableRows };
export default meta;
