import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest } from "rxjs";
import { CastModel } from "src/app/interfaces/credits.model";
import { MovieDetailsModel } from "src/app/interfaces/movie-details.model";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styleUrls: ["./pelicula.component.scss"],
})
export class PeliculaComponent implements OnInit {
  movie_id: string;
  movie: MovieDetailsModel;
  casting: CastModel[] = [];
  constructor(
    private _activateRoute: ActivatedRoute,
    private _peliculaService: PeliculasService,
    private _location: Location,
    private _router: Router
  ) {}

  ngOnInit(): void {
    /*     this._activateRoute.params.subscribe((params) => {
      this.movie_id = params.id;
    }); */
    this.movie_id = this._activateRoute.snapshot.params.id;
    combineLatest([
      this._peliculaService.DetallesPelicula(this.movie_id),
      this._peliculaService.CastingPelicula(this.movie_id),
    ]).subscribe(([movie, casting]) => {
      if (!movie) {
        this._router.navigateByUrl("/home");
      }
      this.movie = movie;
      this.casting = casting.filter((actor) => actor.profile_path !== null);
    });
  }

  regresar() {
    this._location.back();
  }
}
