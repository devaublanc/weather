import { Search } from "@/components/Search";
import { WeatherPreview } from "@/ui/WeatherPreview";

export default function Home() {
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
