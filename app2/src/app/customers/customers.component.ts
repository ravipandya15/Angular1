import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { ApiConfig } from '../apiconfig';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  apiconfig:ApiConfig;
  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.apiconfig = this.logService.getValue()
    console.log("Customers , config is :",this.apiconfig)
  }

}
