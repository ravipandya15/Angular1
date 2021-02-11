import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input() message = ""; // comming from an API
  @Output() megEvent = new EventEmitter()
  msg = "passed data using variable";
  height = 100;
  width = 100;
  constructor() { }

  ngOnInit() {
  }

  getData(){
    // alert('get Data')
    // console.log('get Data')
    this.height = 100;
  }

  passData(){
    this.megEvent.emit(this.msg)
  }

}
