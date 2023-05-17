import { Weather } from "./types";

const API_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeather(lat: string, lon: string): Promise<Weather> {
  try {
    const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
    const weather: Weather = await response.json();

    return weather;
  } catch (error) {
    throw new Error("Failed to fetch weather");
  }
}

export async function fetchWeatherRemotely(
  lat: string,
  lon: string
): Promise<Weather> {
  const response = await fetch(
    `${API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  const weather = (await response.json()) as Weather;
  return weather;
}
