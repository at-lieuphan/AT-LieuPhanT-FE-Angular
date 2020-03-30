import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, start: number, end: number): any {
    if(value.length > end){
      return value.substr(start, end) + '...';
    }
    else {
      return value;
    }
  }

}
