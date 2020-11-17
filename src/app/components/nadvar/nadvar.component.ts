import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nadvar",
  templateUrl: "./nadvar.component.html",
  styleUrls: ["./nadvar.component.scss"],
})
export class NadvarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  buscarPelicula(buscar: string) {
    buscar = buscar.trim();
    if (buscar.length === 0) {
      return;
    }
    this._router.navigate(["/buscar", buscar]);
  }
}
