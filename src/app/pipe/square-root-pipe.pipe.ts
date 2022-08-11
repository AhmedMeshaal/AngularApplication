import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRootPipe'
})
export class SquareRootPipePipe implements PipeTransform {

  transform(curValue: number): number {
    return Math.sqrt(curValue);
  }

}
