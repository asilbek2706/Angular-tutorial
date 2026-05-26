import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  standalone: true,
})
export class TextPipe implements PipeTransform {
  transform(value: string, mode: 'uppercase' | 'lowercase' | 'capitalize'): string {
    if (!value) return '';
    if (mode === 'uppercase') {
      return value.toUpperCase();
    } else if (mode === 'lowercase') {
      return value.toLowerCase();
    } else {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  }
}
