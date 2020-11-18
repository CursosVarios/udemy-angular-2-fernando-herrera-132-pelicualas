import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";
import { MovieModel } from 'src/app/interfaces/movie.model';
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.scss"],
})
export class BuscarComponent implements OnInit {
  busqueda: string;
  movies:MovieModel[]
  constructor(
    private _activedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.pipe(take(1)).subscribe((resp) => {
      //console.log(resp);
      this.busqueda = resp.texto;
      this._peliculasService
        .BuscarPeliculas(this.busqueda)
        .subscribe((resp) => {
          console.log(resp);
          this.movies = resp
        });
    });
  }
}
