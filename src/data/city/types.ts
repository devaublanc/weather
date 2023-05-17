export type City = {
  id: number;
  name: string;
  coord: Coordinates;
  sys: {
    country: string;
  };
};

export type Coordinates = {
  lat: string;
  lon: string;
};
