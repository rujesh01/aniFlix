export interface Episode {
  sub?: string;
  dub?: string;
}

export interface Anime {
  id: string;
  rank?: number;
  name: string;
  jname?: string;
  description?: string;
  poster: string;
  type: "TV" | "Movie" | "OVA";
  episodes: Episode[];
  duration?: string;
  otherInfo: string[];
  rating?: number | null;
}

export interface SpotlightAnimes {
  rank: number;
  id: string;
  name: string;
  description: string;
  poster: string;
  jname: string;
  episodes: {
    sub: string;
    dub: number;
  };
  type: string;
  otherInfo: string[];
}

export type Genre = string;

export interface AnimeHomeTypes {
  spotlightAnimes: SpotlightAnimes[];
  trendingAnimes: Anime[];
  // latestEpisodeAnimes: Anime[];
  // topUpcomingAnimes: Anime[];
  // top10Animes: Anime[];
  // topAiringAnimes: Anime[];
  // mostPopularAnimes: Anime[];
  // mostFavoriteAnimes: Anime[];
  // latestCompletedAnimes: Anime[];
  // genres: Genre[];
}
