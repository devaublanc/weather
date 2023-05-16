import { City } from "./types";

export type CityPayload = { list: City[] };
export async function fetchCity(cityName: string): Promise<City> {
  try {
    const response = await fetch(
      `https://openweathermap.org/data/2.5/find?q=${cityName}&appid=439d4b804bc8187953eb36d2a8c26a02`
    );
    const data: CityPayload = await response.json();
    const list = data.list;
    if (list.length === 0) {
      throw new Error("City not found");
    }
    // Handle the response data
    return list[0];
  } catch (error) {
    throw new Error("Failed to fetch city");
  }
}
