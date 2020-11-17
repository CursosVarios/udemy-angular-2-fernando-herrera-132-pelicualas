import { Component, HostListener, OnInit } from "@angular/core";
import { of } from "rxjs";
import { MovieModel } from "src/app/interfaces/movie.model";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public movies: MovieModel[];
  public moviesSlide: MovieModel[];
  private cargando: boolean = false;
  @HostListener("window:scroll", ["$event"])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 2000;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (pos > max && !this._peliculasService.loadCartelera) {
      this._peliculasService.GetCartelera().subscribe((resp) => {
        this.movies.push(...resp);
      });
    }
  }
  constructor(private _peliculasService: PeliculasService) {
    _peliculasService.GetCartelera().subscribe((resp) => {
      // console.log(resp);
      this.moviesSlide = [...resp];
      this.movies = resp;
    });
  }

  ngOnInit(): void {}
}
