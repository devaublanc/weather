import { create } from "zustand";

import { Coordinates } from "@/data/city/types";
import { createJSONStorage, persist } from "zustand/middleware";

export type Favorite = {
  id: string;
  name: string;
  coord: Coordinates;
};
type FavoritesStore = {
  favorites: Favorite[];
  addFavorite: (item: Favorite) => void;
  removeFavorite: (favoriteId: string) => void;
};

// Zustand store
export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    set => ({
      favorites: [],

      // Add item to the array
      addFavorite: favorite => {
        set(state => ({ favorites: [...state.favorites, favorite] }));
      },

      // Remove item from the array
      removeFavorite: (favoriteId: string) => {
        set(state => ({
          favorites: state.favorites.filter(i => i.id !== favoriteId),
        }));
      },
    }),
    {
      name: "itemStore", // Cookie name for persistence
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useFavoritesCity = () => {
  const favorites = useFavoritesStore(state => state.favorites);
  const addFavorite = useFavoritesStore(state => state.addFavorite);
  const removeFavorite = useFavoritesStore(state => state.removeFavorite);

  return { favorites, addFavorite, removeFavorite };
};
