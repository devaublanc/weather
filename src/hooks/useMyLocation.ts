import { Coordinates } from "@/data/city/types";
import { useWeather } from "@/data/weather/hook";
import { useEffect, useState } from "react";

export function useMyLocation() {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  const { data, isLoading } = useWeather(location?.lat, location?.lon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          lat: position.coords.latitude.toString(),
          lon: position.coords.longitude.toString(),
        });
      },
      error => {
        setError(error);
      }
    );
  }, []);

  return { location, weather: data, error, isLoading };
}
