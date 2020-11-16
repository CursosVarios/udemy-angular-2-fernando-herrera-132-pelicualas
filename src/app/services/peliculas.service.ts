import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CartelerasModel } from "../interfaces/carteleras.model";

@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  private _urlApi = "https://api.themoviedb.org/3/";
  private _keyApi = environment.apiMovieKey;
  constructor(private _http: HttpClient) {}
  GetCartelera(page: number = 1): Observable<CartelerasModel> {
    return this._http.get<CartelerasModel>(
      `${this._urlApi}movie/now_playing?api_key=${this._keyApi}&language=es-Es&page=${page}`
    );
  }
}
