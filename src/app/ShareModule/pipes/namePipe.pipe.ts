import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nameCapitalize' })
export class NameCapitalize implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let newValue = value.trim();
    newValue = newValue.replace('  ', ' ');
    let words = newValue.split(' ');
    for (let i in words) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }
}
