import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { PeliculaComponent } from "./pelicula/pelicula.component";
import { BuscarComponent } from "./buscar/buscar.component";

const declarations = [HomeComponent, PeliculaComponent, BuscarComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, CommonModule],
  exports: [...declarations],
})
export class PagesModule {}
