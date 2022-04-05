import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(languages: string[]): string {
    return languages ? languages[0]: "Does not have languages";
  }

}
