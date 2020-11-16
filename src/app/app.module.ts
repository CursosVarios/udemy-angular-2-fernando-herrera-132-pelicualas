import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { PipesModule } from "./pipes/pipes.module";
import { PagesModule } from "./pages/pages.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule, PipesModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
