import { Injectable, Inject } from '@angular/core';
// import { getLocaleDateFormat } from '@angular/common';
import { apiconfigvalue } from './apiconfig.value';
import { ApiConfig } from './apiconfig';

@Injectable(
  {
  providedIn: 'any'
}
)
export class LogService {

  constructor(@Inject(apiconfigvalue) private config:ApiConfig) { 

  }
  
  getData(){
    console.log("from log service")
  }

  getLog(name : string){
    return "Hello from Logs " + name 
  }

  getValue(){
    return this.config;
  }
  
}

