import { debounce } from "@/utils/timer";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";

export type SearchInputProps = {
  value: string;
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
};
export function SearchInput({ onSearch, onChange, value }: SearchInputProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 1000),
    [onSearch]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
      handleSearch(e.target.value);
    },
    [onChange, handleSearch]
  );
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        onChange={handleChange}
        value={value}
        placeholder="Search a city"
      />
    </InputGroup>
  );
}
