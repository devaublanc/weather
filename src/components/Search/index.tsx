import { debounce } from "@/utils/timer";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";

export type SearchProps = {
  onSearch: (value: string) => void;
};
export function Search({ onSearch }: SearchProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length < 3) return;
      onSearch(e.target.value);
    }, 1000),
    [onSearch]
  );
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input onChange={onChange} placeholder="Search a city" />
    </InputGroup>
  );
}
