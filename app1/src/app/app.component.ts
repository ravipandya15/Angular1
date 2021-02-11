import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { IProduct } from './IProduct';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Product App';
  data = "I am from parent component";
  msg = "";
  isChild2ButtonEnabled:boolean = false;
  // @ViewChild(ChildComponent,{static:false})child : ChildComponent
  @ViewChild(ChildComponent)child : ChildComponent
  @ViewChild('someinput', {}) inputBox : ElementRef

  constructor(){
    console.log("ctor")
  }
  ngOnInit(){
  console.log(this.child)
  }
  ngAfterViewInit()
  {
    console.log(this.child)
    console.log(this.inputBox.nativeElement)
     this.inputBox.nativeElement.placeholder = 'new Element'
  }

  checkData(msg:any){
    this.msg = msg;
    this.IsGreetButtonEnabled()

    // case 2
    // this.child.localPropertyEnabled = !this.child.localPropertyEnabled;
  }

  IsGreetButtonEnabled(){
    console.log("before value of isChild2ButtonEnabled is ", this.isChild2ButtonEnabled)
    this.isChild2ButtonEnabled = !this.isChild2ButtonEnabled
    console.log("After value of isChild2ButtonEnabled is ", this.isChild2ButtonEnabled)
  }

  // getProducts() : IProduct[]{
  //   // return [
  //   //   {
  //   //     productId:1,
  //   //     productName: "abc",
  //   //     productCode:"11"
  //   //   },
  //   //   {
  //   //     productId:2,
  //   //     productName: "xyz",
  //   //     productCode:"22",
  //   //   }
  //   // ];
  //   return [];
  // }
}
