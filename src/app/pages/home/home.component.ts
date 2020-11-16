import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private _peliculasService: PeliculasService) {
    _peliculasService.GetCartelera().subscribe((resp) => {
      console.log(resp);
    });
  }

  ngOnInit(): void {}
}
