"use client";

import { GetHomeData } from "@/actions/home/GetHomeData";
import Spotlights from "@/components/homepage/Spotlights";
import TrendingBar from "@/components/homepage/TrendingBar";
import { AnimeHomeTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data, isLoading } = useQuery<AnimeHomeTypes>({
    queryKey: ["homeData"],
    queryFn: GetHomeData,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Failed to load </div>;

  const { spotlightAnimes, trendingAnimes } = data;

  return (
    <div>
      <Spotlights spotlightAnimes={spotlightAnimes} />
      <TrendingBar />
    </div>
  );
};

export default HomePage;
