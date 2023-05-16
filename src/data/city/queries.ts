import { City } from "./types";

export type CityPayload = { list: City[] };
export async function fetchCity(cityName: string): Promise<City[]> {
  if (cityName.length < 3) return [];
  try {
    const response = await fetch(`/api/city?name=${cityName}`);
    const data: CityPayload = await response.json();
    const list = data.list;

    // Handle the response data
    return list;
  } catch (error) {
    throw new Error("Failed to fetch city");
  }
}
