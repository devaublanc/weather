import create from "zustand";

import { City } from "@/data/city/types";
import { useCallback, useEffect } from "react";

type FavoritesStore = {
  cities: City[];

  addCity: (item: City) => void;
  removeCity: (cityId: number) => void;
};

// Zustand store
const useFavoritesStore = create<FavoritesStore>(set => ({
  cities: [],

  // Add item to the array
  addCity: city => {
    set(state => ({ cities: [...state.cities, city] }));
  },

  // Remove item from the array
  removeCity: (cityId: number) => {
    set(state => ({
      cities: state.cities.filter(i => i.id !== cityId),
    }));
  },
}));

export const useFavorites = () => {
  const cities = useFavoritesStore(state => state.cities);

  const addCity = useFavoritesStore(state => state.addCity);
  const removeCity = useFavoritesStore(state => state.removeCity);

  const isCityAdded = useCallback(
    (city: City) => {
      return cities.some(i => i.id === city.id);
    },
    [cities]
  );

  useEffect(() => {
    // Access the store and perform any additional side effects if needed
    // ...

    // Example: Log the current items to the console
    console.log("Current cities:", cities);
  }, [cities]);

  return { cities, addCity, removeCity, isCityAdded };
};
