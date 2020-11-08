import React from "react";
import { components, OptionTypeBase } from "react-select";
import { NoticeProps } from "react-select/src/components/Menu";
import { Typography } from "../../../foundation";

export function NoOptionsMessage<OptionType extends OptionTypeBase>(
  props: NoticeProps<OptionType>
) {
  const { noOptionsTitle, setInvalidSearch } = props.selectProps;

  React.useEffect(() => {
    setInvalidSearch(true);
    return () => setInvalidSearch(false);
  }, [setInvalidSearch]);

  return (
    <>
      <Typography variant="h6" fontWeight="bold" marginLeft="2rem">
        {noOptionsTitle}
      </Typography>
      <components.NoOptionsMessage {...props} />
    </>
  );
}
