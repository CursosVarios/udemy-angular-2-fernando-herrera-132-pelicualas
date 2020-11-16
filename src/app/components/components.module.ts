import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NadvarComponent } from "./nadvar/nadvar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PeliculasCardComponent } from "./card/peliculas-card/peliculas-card.component";
import { RouterModule } from "@angular/router";
import { SlideshowComponent } from "./slider/slideshow/slideshow.component";

const declarations = [
  NadvarComponent,
  HeaderComponent,
  FooterComponent,
  PeliculasCardComponent,
  SlideshowComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, RouterModule],
  exports: [...declarations],
})
export class ComponentsModule {}
