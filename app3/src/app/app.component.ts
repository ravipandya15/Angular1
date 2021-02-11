import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

function ageRangeValidator(minAge: number, maxAge: number) : ValidatorFn {
  return (control : AbstractControl) : {[key:string]:boolean}  | null => {
  if (control.value !== undefined && (isNaN(control.value) || control.value < minAge || control.value > maxAge)){

    return  {'ageRange':true};
  } 

  return null;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // email : FormControl;
  title : string;
  loginForm : FormGroup;
  minAge:number = 18;
  maxAge:number = 60; // cam come from API

  constructor(private fb: FormBuilder){
    // this.email = new FormControl(null,[Validators.required])
    // this.loginForm = new FormGroup({
    //     email : new FormControl(" ",[Validators.required]),
    //     password : new FormControl(" ",[Validators.required, Validators.maxLength(8)])
    // });
  }
  ngOnInit(){
    this.loginForm = this.fb.group({
      email : [null,[Validators.required]],
      password : [null,[Validators.required, Validators.maxLength(8)]],
      age : [null, [ageRangeValidator(this.minAge, this.maxAge)]],
      phonenumber : [null],
      notification : ['email']
    })

     this.formControlValueChanged();
  }

  loginUser(){
    console.log(this.loginForm.value)
    console.log(this.loginForm.status)
    //make an api call
    //pass this user information to the server
  }

  formControlValueChanged(){
    const phoneControl = this.loginForm.get('phonenumber');

      this.loginForm.get('notification').valueChanges.subscribe(
        data => {
          console.log(data);
          if (data === 'phone'){
            phoneControl.setValidators([Validators.required]);
          }
          else if (data === 'email'){
            // phoneControl?.clearValidators();
            phoneControl.clearValidators();
          }
  
          phoneControl.updateValueAndValidity();
        }
    )
  }
}
