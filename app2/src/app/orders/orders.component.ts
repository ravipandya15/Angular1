import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { ApiConfig } from '../apiconfig';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  apiconfig:ApiConfig;
  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.apiconfig = this.logService.getValue()

    console.log("Orders , config is :",this.apiconfig)
  }

}
