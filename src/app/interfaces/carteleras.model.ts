import { MovieModel } from "./movie.model";

export interface CartelerasModel {
  results: MovieModel[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}
