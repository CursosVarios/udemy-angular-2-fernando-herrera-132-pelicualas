import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, take, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { CartelerasModel } from "../interfaces/carteleras.model";
import { MovieModel } from "../interfaces/movie.model";

@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  private _urlApi = "https://api.themoviedb.org/3/";
  private _keyApi = environment.apiMovieKey;
  private page: number;
  public loadCartelera: boolean = false;
  constructor(private _http: HttpClient) {
    this.page = 1;
  }

  get params() {
    return {
      api_key: this._keyApi,
      language: "",
      page: this.page.toString(),
    };
  }

  GetCartelera(): Observable<MovieModel[]> {
    console.log("respuesta");
    this.loadCartelera = true;
    return this._http
      .get<CartelerasModel>(`${this._urlApi}movie/now_playing`, {
        params: { ...this.params },
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.page++;
          this.loadCartelera = false;
        }),
        take(1)
      );
  }

  BuscarPeliculas(busqueda: string): Observable<MovieModel[]> {
    const params = { ...this.params, page: "1", query: busqueda };
    return this._http
      .get<CartelerasModel>(`${this._urlApi}search/movie`, {
        params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {}),
        take(1)
      );
  }
  ResetPages() {
    this.page = 1;
  }
}
