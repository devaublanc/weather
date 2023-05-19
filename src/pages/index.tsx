import { useState } from "react";

import { FavoritesGroupedLists } from "@/components/Favorites/FavoritesGroupedList";
import { SearchInput } from "@/components/Search/SearchInput";
import { useSearchCity } from "@/data/city/hook";

import { useIsSSR } from "@/hooks/useIsSSR";

import { SearchResultList } from "@/components/Search/SearchResultList";
import { MyLocation } from "@/components/MyLocation/MyLocation";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState("");

  const { data: cities, isLoading } = useSearchCity(searchValue, {});

  const isSSR = useIsSSR();

  const shouldDisplayCityList = searchValue.length > 0 && value.length > 0;

  const resetValue = () => {
    setValue("");
  };

  return (
    <>
      <SearchInput
        value={value}
        onChange={setValue}
        onSearch={setSearchValue}
      />

      {shouldDisplayCityList && (
        <SearchResultList
          isLoading={isLoading}
          cities={cities ?? []}
          onClickAction={resetValue}
        />
      )}
      <MyLocation />
      {!isSSR && <FavoritesGroupedLists />}
    </>
  );
}
