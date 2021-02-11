import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LogService } from '../log.service';
import { ApiConfig } from '../apiconfig';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers: [AppService]
})
export class Child1Component implements OnInit {

  data: number;
  udata : number;
  apiconfig : ApiConfig;
  msg : string;
  constructor(private appService : AppService, private logService : LogService) {

   }

  ngOnInit(): void {
    this.apiconfig = this.logService.getValue()
    console.log("Child1 , config is :",this.apiconfig)
    
  }
  getData(){
    this.udata = this.appService.getData(this.data)
    // this.logService.getData()
  }

  getLogData(){
    this.msg = this.logService.getLog("child1")
  }

}
