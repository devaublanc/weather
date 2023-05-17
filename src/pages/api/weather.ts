import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";
import { Weather } from "@/data/weather/types";

const API_URL = "https://api.openweathermap.org/data/2.5";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Weather>
) {
  try {
    const response = await fetch(
      `${API_URL}/weather?lat=${req.query.lat}&lon=${req.query.lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const weather = (await response.json()) as Weather;

    // Handle the response data
    return res.status(200).json(weather);
  } catch (error) {
    res.status(500);
  }
}
