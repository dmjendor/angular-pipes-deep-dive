import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false, // can impact performance by allowing transform to be run every time anything changes
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: 'asc' | 'desc') {
    const sorted = [...value].sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return b > a ? 1 : -1;
      }
    });
    return sorted;
  }
}
