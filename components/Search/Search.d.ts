import React from "react";
export declare type OptionType = {
    value: string | null;
    label: string;
};
declare type SearchProps = {
    options: OptionType[];
    onChange: React.Dispatch<React.SetStateAction<OptionType>>;
};
export declare function Search(props: SearchProps): JSX.Element;
export {};
