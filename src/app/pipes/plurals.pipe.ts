import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plurals'
})
export class PluralsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const newstr = value.replace('Doors', 'Door');
    return newstr;
  }

}
