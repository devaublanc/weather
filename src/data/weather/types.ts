export type Weather = {
  coord: Coordinates;
  id: string;
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    country: string;
  };
};

export type Coordinates = {
  lat: string;
  lon: string;
};
