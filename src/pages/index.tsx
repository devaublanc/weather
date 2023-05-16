import { Search } from "@/components/Search";
import { useSearchCity } from "@/data/city/hook";
import { WeatherPreview } from "@/ui/WeatherPreview";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error, isError } = useSearchCity(searchValue);
  console.log("============data", data);
  return (
    <>
      <Search onSearch={setSearchValue} />
      <WeatherPreview />
    </>
  );
}
