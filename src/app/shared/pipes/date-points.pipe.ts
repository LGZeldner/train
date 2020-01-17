import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePoints'
})
export class DatePointsPipe implements PipeTransform {

  transform(date: string): string {
    return date.slice(0,2)+"."+date.slice(2, 4)+"."+date.slice(4);
  }

}
