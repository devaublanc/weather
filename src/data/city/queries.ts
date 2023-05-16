import { City } from "./types";

export async function fetchCity(cityName: string): Promise<City[]> {
  if (cityName.length < 3) return [];
  try {
    const response = await fetch(`/api/city?name=${cityName}`);
    const cities: City[] = await response.json();

    return cities;
  } catch (error) {
    throw new Error("Failed to fetch city");
  }
}
