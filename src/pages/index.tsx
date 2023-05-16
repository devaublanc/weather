import { Search } from "@/components/Search";
import { useSearchCity } from "@/data/city/hook";
import { WeatherPreview } from "@/ui/WeatherPreview";

export default function Home() {
  const { data, isLoading, error, isError } = useSearchCity("paris");
  console.log({ data, isLoading, error, isError });
  return (
    <>
      <Search
        onSearch={searchValue => {
          console.log("search", searchValue);
        }}
      />
      <WeatherPreview />
    </>
  );
}
