import React from "react";
import { components } from "react-select";
import { Typography } from "../../../foundation";

export function NoOptionsMessage({
  selectProps: { setInvalidSearch, noOptionsTitle },
  ...props
}: any) {
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
