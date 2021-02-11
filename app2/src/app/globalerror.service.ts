import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalerrorService implements ErrorHandler{

  constructor() { }
  handleError(error : any) : void{
    //write own business logic

    //errors which r generated inside application
    //send crash report to server
    console.log('this is my error')
    throw error;
  }
}
