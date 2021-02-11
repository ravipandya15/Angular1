import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if (!args){
      return value;
    }
    // return value.filter()
  }

}
