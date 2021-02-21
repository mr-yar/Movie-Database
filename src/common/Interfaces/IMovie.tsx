export interface IMovie {
  adult: boolean | null;
  backdrop_path: string;
  genre_ids: number[] | [];
  original_language: string;
  original_title: string;
  poster_path: string;
  id: number;
  video: boolean | null;
  vote_average: number | null;
  vote_count: number | null;
  overview: string;
  release_date: string;
  title: string;
  popularity: number | null;
  media_type: string;
}
