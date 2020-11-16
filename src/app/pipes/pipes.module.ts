import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextLimitPipe } from "./text-limit.pipe";

@NgModule({
  declarations: [TextLimitPipe],
  imports: [CommonModule],
  exports: [TextLimitPipe],
})
export class PipesModule {}
