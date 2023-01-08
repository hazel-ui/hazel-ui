import { useEffect } from "react";
import { components, OptionTypeBase } from "react-select";

import { Typography } from "../../../foundation/Typography/Typography.js";

import type { NoticeProps } from "react-select/src/components/Menu.js";

export function NoOptionsMessage<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean
>(props: NoticeProps<OptionType, IsMulti>) {
  const { noOptionsTitle, setInvalidSearch } = props.selectProps;

  useEffect(() => {
    setInvalidSearch(true);
    return () => setInvalidSearch(false);
  }, [setInvalidSearch]);

  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center", marginTop: "1rem" }}
      >
        {noOptionsTitle}
      </Typography>
      <components.NoOptionsMessage {...props} />
    </>
  );
}
