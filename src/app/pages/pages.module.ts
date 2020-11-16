import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { PeliculaComponent } from "./pelicula/pelicula.component";
import { BuscarComponent } from "./buscar/buscar.component";
import { ComponentsModule } from '../components/components.module';

const declarations = [HomeComponent, PeliculaComponent, BuscarComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ComponentsModule],
  exports: [...declarations],
})
export class PagesModule {}
