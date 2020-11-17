import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextLimitPipe } from "./text-limit.pipe";
import { NoImagePipe } from "./no-image.pipe";

@NgModule({
  declarations: [TextLimitPipe, NoImagePipe],
  imports: [CommonModule],
  exports: [TextLimitPipe, NoImagePipe],
})
export class PipesModule {}
