import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  childMsg = "from Child component";
  @Input() isButtonEnabled : boolean;
  localPropertyEnabled : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.localPropertyEnabled = this.isButtonEnabled;
  }

}
