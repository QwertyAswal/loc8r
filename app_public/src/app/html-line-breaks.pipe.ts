import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlLineBreaks'
})
export class HtmlLineBreaksPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
  }

}
