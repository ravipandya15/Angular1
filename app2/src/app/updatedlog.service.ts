import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedlogService {

  constructor() { }

  getData():void{
    console.log("from updated log service")
  }
}
