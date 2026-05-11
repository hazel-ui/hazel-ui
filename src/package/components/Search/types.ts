export interface SearchOptionType {
  label: string;
  value: string;
}

export type SearchValueType<T> = T | readonly T[] | null;
