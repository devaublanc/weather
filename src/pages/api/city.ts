import { City } from "@/data/city/types";
import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";

type CityPayload = { list: City[] };

const API_URL = "https://openweathermap.org/data/2.5";

function deduplicateCities(data: City[]): City[] {
  return Object.values(
    data.reduce((map, city) => {
      map[city.id] = city;
      return map;
    }, {} as { [key: number]: City })
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<City[]>
) {
  try {
    const response = await fetch(
      `${API_URL}/find?q=${req.query.name}&appid=${process.env.OPENWEATHER_API_KEY_CITY}`
    );
    const data = (await response.json()) as CityPayload;

    const list = data.list;

    // Handle the response data
    return res.status(200).json(deduplicateCities(list));
  } catch (error) {
    res.status(500);
  }
}
