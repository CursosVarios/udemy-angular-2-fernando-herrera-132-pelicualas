import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textLimit",
})
export class TextLimitPipe implements PipeTransform {
  transform(texto: string, numeroCaracteres: number = 130): string {
    return texto.substr(0, numeroCaracteres);
  }
}
