import create from "zustand";

import { City } from "@/data/city/types";
import { useEffect } from "react";

type ItemStore = {
  cities: City[];
  setCities: (newItems: City[]) => void;
  addCity: (item: City) => void;
  removeItem: (item: City) => void;
};

// Zustand store
const useItemStore = create<ItemStore>(set => ({
  cities: [],

  // Setter function
  setCities: newItems => {
    set(() => ({ cities: newItems }));
  },

  // Add item to the array
  addCity: item => {
    set(state => ({ cities: [...state.cities, item] }));
  },

  // Remove item from the array
  removeItem: item => {
    set(state => ({
      cities: state.cities.filter(i => i !== item),
    }));
  },
}));

export const useItems = () => {
  const cities = useItemStore(state => state.cities);

  const setCities = useItemStore(state => state.setCities);
  const addCity = useItemStore(state => state.addCity);
  const removeCity = useItemStore(state => state.removeItem);

  useEffect(() => {
    // Access the store and perform any additional side effects if needed
    // ...

    // Example: Log the current items to the console
    console.log("Current cities:", cities);
  }, [cities]);

  return { cities, setCities, addCity, removeCity };
};
