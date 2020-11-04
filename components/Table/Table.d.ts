/// <reference types="react" />
import { Column } from "react-table";
export declare type TableProps = {
    data: Array<any>;
    columns: Array<Column>;
    enableSorting?: boolean;
    hideHeaders?: boolean;
};
export declare function Table(props: TableProps): JSX.Element;
export declare namespace Table {
    var defaultProps: {
        enableSorting: boolean;
        hideHeaders: boolean;
    };
}
