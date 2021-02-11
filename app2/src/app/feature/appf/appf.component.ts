import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-appf',
  templateUrl: './appf.component.html',
  styleUrls: ['./appf.component.css']
})
export class AppfComponent implements OnInit {

  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    console.log(this.logservice.getData())
  }

}
