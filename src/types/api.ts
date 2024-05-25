export interface SearchRes {
  results: Media[];
  totalResults: number;
}

export interface Media {
  id: string;
  name: string;
  type: "movie" | "show";
  tags: string[];
}
