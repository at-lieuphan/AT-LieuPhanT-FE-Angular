import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, start: number, end: number): any {
    return value.substr(start, end) + '...';
  }

}
