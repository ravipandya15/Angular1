import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AppService {

  private static count = 1;
  constructor() { 
    AppService.count = AppService.count + 1;
    console.log('ount is :', AppService.count)
  }

  getData(data: number):number{
    let count = data + 10;
    return count
  }
}
