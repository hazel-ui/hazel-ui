import type {} from "react-select/base";
import type { GroupBase } from "react-select";

export interface SearchOptionType {
  label: string;
  value: string;
}

export type SearchValueType<T> = T | readonly T[] | null;

declare module "react-select/base" {
  // Generics must match the Props signature exactly for module augmentation to work,
  // even though they are not referenced in the body of this interface.
  /* eslint-disable @typescript-eslint/no-unused-vars */
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    /* eslint-enable @typescript-eslint/no-unused-vars */
    floatingLabel?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention -- augmenting an external library interface, name must match existing prop
    invalidSearch?: boolean;
    setInvalidSearch: (value: boolean) => void;
    noOptionsTitle?: string;
  }
}
