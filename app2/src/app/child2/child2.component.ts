import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private appService : AppService) { 

  }

  ngOnInit(): void {
    let a = this.appService.getData(45)
    console.log(a)
  }


}
