import { City } from "@/data/city/types";
import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";

type CityPayload = { list: City[] };

const API_URL = "https://openweathermap.org/data/2.5";

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
    return res.status(200).json(list);
  } catch (error) {
    res.status(500);
  }
}
// https://api.openweathermap.org/data/3.0/onecall?lat=48.8534&lon=2.3488&appid=27d89500d6905e1d28567be7d3e44126
//https://api.openweathermap.org/data/2.5/weather?lat=48.8534&lon=2.3488&appid=27d89500d6905e1d28567be7d3e44126