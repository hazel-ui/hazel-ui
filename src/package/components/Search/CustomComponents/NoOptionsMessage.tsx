import { useEffect } from "react";
import { components, NoticeProps } from "react-select";

import { Typography } from "../../../foundation/Typography/Typography.js";
import { SearchOptionType } from "../types.js";

export function NoOptionsMessage(props: NoticeProps<SearchOptionType>) {
  const { noOptionsTitle, setInvalidSearch } = props.selectProps;

  useEffect(() => {
    setInvalidSearch(true);
    return () => setInvalidSearch(false);
  }, [setInvalidSearch]);

  return (
    <>
      <Typography
        variant="label"
        sx={{ fontWeight: "bold", textAlign: "center", marginTop: "1rem" }}
      >
        {noOptionsTitle}
      </Typography>
      <components.NoOptionsMessage {...props} />
    </>
  );
}
