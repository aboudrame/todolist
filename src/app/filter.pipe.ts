import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: TodoItem[], args?: boolean): any {

    if (args === undefined) {
      return value;
    } else if (args === true) {
      return value.filter(x => x.completed === true)
    } else {
      return value.filter(x => x.completed === false);
    }
  }
  }
