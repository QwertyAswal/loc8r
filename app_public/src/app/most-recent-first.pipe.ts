import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {

  private compare(a, b) {
    const createdOnA = a.createdOn;
    const createdOnB = b.createdOn;

    let comparision = 1;
    if (createdOnA > createdOnB)
      comparision = -1;
    return comparision;
  }
  transform(value: any[]): any[] {
    if (value && value.length > 0)
      return value.sort(this.compare);
    return null;
  }

}
