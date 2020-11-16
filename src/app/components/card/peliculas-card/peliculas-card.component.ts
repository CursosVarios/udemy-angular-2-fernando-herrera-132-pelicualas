import { Component, Input, OnInit } from "@angular/core";
import { MovieModel } from "src/app/interfaces/movie.model";

@Component({
  selector: "app-peliculas-card",
  templateUrl: "./peliculas-card.component.html",
  styleUrls: ["./peliculas-card.component.scss"],
})
export class PeliculasCardComponent implements OnInit {
  @Input() movie: MovieModel;
  constructor() {}

  ngOnInit(): void {}
}
