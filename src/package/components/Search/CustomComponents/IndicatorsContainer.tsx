import { Children } from "react";
import { components } from "react-select";

export function IndicatorsContainer({ children, ...props }: any) {
  const removedTypes = ["IndicatorSeparator", "DropdownIndicator"];
  const allowedChildren = Children.map(children, (child) => {
    // @ts-ignore
    return child && !removedTypes.includes(child.type.name) ? child : null;
  });

  return (
    <components.IndicatorsContainer {...props}>
      {allowedChildren}
    </components.IndicatorsContainer>
  );
}
