import { Search } from "@/components/Search";
import { useSearchCity } from "@/data/city/hook";
import { CityList } from "@/ui/CityList";

import { Flex } from "@chakra-ui/react";
import { useCallback, useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const { data: cities, isLoading } = useSearchCity(searchValue);

  const resetSearchValue = useCallback(() => {
    setSearchValue("");
  }, []);

  const onStar = useCallback(() => {
    resetSearchValue();
  }, [resetSearchValue]);

  const onClickCity = useCallback(() => {
    resetSearchValue();
  }, [resetSearchValue]);

  return (
    <>
      <Search onSearch={setSearchValue} />
      <Flex alignItems={"center"} height={"100%"} justifyContent={"center"}>
        <CityList
          isLoading={isLoading}
          cities={cities ?? []}
          onStar={onStar}
          onClickCity={onClickCity}
        />
      </Flex>
    </>
  );
}
