import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis' // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  // transform should madatorily return something
  transform(value: string, ...args: any[]): string {
    console.log(value);
    console.log(args[0]);
    value = value.substring(0, args[0]);
    return value + '...';
  }

}
