import { Favorites } from "@/components/Favorites";
import { Search } from "@/components/Search";
import { useSearchCity } from "@/data/city/hook";
import { City } from "@/data/city/types";
import { useFavorites } from "@/stores/favoritesStore";
import { CityList } from "@/ui/CityList";

import { useCallback, useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const { data: cities, isLoading } = useSearchCity(searchValue);
  const { addCity } = useFavorites();
  const resetSearchValue = useCallback(() => {
    setSearchValue("");
  }, []);

  const onClickFavorite = useCallback(
    (city: City) => {
      resetSearchValue();
      addCity(city);
    },
    [resetSearchValue, addCity]
  );

  const onClickCity = useCallback(() => {
    resetSearchValue();
  }, [resetSearchValue]);

  const shouldDisplayCityList = searchValue.length > 0 && !isLoading;
  const shouldDisplayFavorites = !shouldDisplayCityList;

  return (
    <>
      <Search onSearch={setSearchValue} />
      {shouldDisplayCityList && (
        <CityList
          isLoading={isLoading}
          cities={cities ?? []}
          onClickFavorite={onClickFavorite}
          onClickCity={onClickCity}
        />
      )}
      {shouldDisplayFavorites && <Favorites />}
    </>
  );
}
