import { Component, OnInit } from "@angular/core";
import { MovieModel } from "src/app/interfaces/movie.model";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public movies: MovieModel[];
  constructor(private _peliculasService: PeliculasService) {
    _peliculasService.GetCartelera().subscribe((resp) => {
      // console.log(resp);
      this.movies = resp.results;
    });
  }

  ngOnInit(): void {}
}
