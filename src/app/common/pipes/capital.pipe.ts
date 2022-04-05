import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(capitals: string[]): string {
    return capitals ? capitals[0]: "Does not have capital";
  }

}
