import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ): unknown {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp!: number;
    let symbol!: '°F' | '°C';
    symbol = outputType === 'cel' ? '°C' : '°F';
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32; // convert from celsius to farenheit
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = val - 32 * (5 / 9); // convert from farenheit to celsius
    } else {
      outputTemp = val;
    }

    return `${outputTemp.toFixed(1)} ${symbol}`;
  }
}
