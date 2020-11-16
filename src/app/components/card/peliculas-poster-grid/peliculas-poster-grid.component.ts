import { Component, Input, OnInit } from "@angular/core";
import { MovieModel } from "src/app/interfaces/movie.model";

@Component({
  selector: "app-peliculas-poster-grid",
  templateUrl: "./peliculas-poster-grid.component.html",
  styleUrls: ["./peliculas-poster-grid.component.scss"],
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: MovieModel[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.movies)
  }
}
