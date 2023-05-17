import { Weather } from "./types";

export async function fetchWeather(lat: number, lon: number): Promise<Weather> {
  try {
    const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
    const weather: Weather = await response.json();

    return weather;
  } catch (error) {
    throw new Error("Failed to fetch weather");
  }
}
