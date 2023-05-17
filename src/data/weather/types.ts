export type Weather = {
  coord: Coordinates;
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temps: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
};

export type Coordinates = {
  lat: number;
  lon: number;
};
