import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value = value[0] != 0 ? "0" + value : "" + value;

    let newStr = "";
    let i = 0;

    
      newStr = newStr + value.substr(i * 3, 3) + "-";
    i = 1;

    return newStr + value.substr(i*3,value.length-3);
  }

}
