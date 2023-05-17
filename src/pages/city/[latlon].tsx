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

  return <WeatherDetail lat={parseFloat(lat)} lon={parseFloat(lon)} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const { latlon } = context.query;
  const [lat, lon] = (latlon as string).split(",");
  const lati = parseFloat(lat);
  const long = parseFloat(lon);

  console.log({ lati, long });

  await queryClient.prefetchQuery(["weather", lati, long], () =>
    fetchWeatherRemotely(lati, long)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
