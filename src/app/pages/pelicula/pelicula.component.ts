import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  constructor(
    private _activateRoute: ActivatedRoute,
    private _peliculaService: PeliculasService,
    private  _location:Location
  ) {}

  ngOnInit(): void {
    /*     this._activateRoute.params.subscribe((params) => {
      this.movie_id = params.id;
    }); */
    this.movie_id = this._activateRoute.snapshot.params.id;
    this._peliculaService.DetallesPelicula(this.movie_id).subscribe((resp) => {
      console.log(resp);
      this.movie = resp;
    });
  }

  regresar(){
    this._location.back()

  }
}
