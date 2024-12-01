export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  poster: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  ratings: Rating[];
  averageRating: string;
}
