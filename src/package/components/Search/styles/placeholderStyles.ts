import { Theme } from "../../../foundation/Theme/Theme.js";

import type { SearchOptionType } from "../types.js";
import type {
  CSSObjectWithLabel,
  GroupBase,
  PlaceholderProps,
} from "react-select";

export const placeholderStyles = (
  base: CSSObjectWithLabel,
  _state: PlaceholderProps<
    SearchOptionType,
    boolean,
    GroupBase<SearchOptionType>
  >
): CSSObjectWithLabel => ({
  ...base,
  fontFamily: Theme.font.sansSerif,
});
