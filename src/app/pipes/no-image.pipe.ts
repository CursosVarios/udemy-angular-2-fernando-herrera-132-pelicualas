import { Pipe, PipeTransform } from "@angular/core";
import { constants } from "buffer";

@Pipe({
  name: "noImage",
})
export class NoImagePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) {
      // console.log({ value });
      return "./assets/img/no-image.jpg";
    }
    return `https://image.tmdb.org/t/p/w500${value}`;
  }
}
