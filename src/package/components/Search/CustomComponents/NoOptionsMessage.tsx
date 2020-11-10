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
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        margin="1rem 0 0 0"
      >
        {noOptionsTitle}
      </Typography>
      <components.NoOptionsMessage {...props} />
    </>
  );
}
