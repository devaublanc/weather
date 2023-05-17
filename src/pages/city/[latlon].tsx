import { WeatherDetail } from "@/components/Weather/WeatherDetail";
import { fetchWeatherRemotely } from "@/data/weather/queries";

import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { latlon } = router.query;

  if (!latlon) return null;

  const [lat, lon] = (latlon as string).split(",");

  return <WeatherDetail lat={lat} lon={lon} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const { latlon } = context.query;
  const [lat, lon] = (latlon as string).split(",");

  await queryClient.prefetchQuery(["weather", lat, lon], () =>
    fetchWeatherRemotely(lat, lon)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
