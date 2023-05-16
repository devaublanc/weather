import { useFavorites } from "@/stores/favoritesStore";
import { CityItem } from "@/ui/CityItem";
import { Flex, Text } from "@chakra-ui/react";
import { useCallback } from "react";

export type FavoriteCityProps = {
  cityId: number;
  cityName: string;
};
export function FavoriteItem({ cityId, cityName }: FavoriteCityProps) {
  const { removeCity } = useFavorites();
  const onRemoveFavorite = useCallback(() => {
    removeCity(cityId);
  }, [cityId, removeCity]);

  return (
    <CityItem
      isFavorite
      cityName={cityName}
      onClickRemoveFavorite={onRemoveFavorite}
      cityId={cityId}
      temperature={32}
      onClick={() => {}}
    />
  );
}
