import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dating',
})
export class DatingPipe implements PipeTransform {
  transform(value: number | string | Date | null | undefined): string | null {
    if (!value) {
      return 'Ongoing';
    }

    return new DatePipe('en').transform(value, 'MMMM, yyyy');
  }
}
