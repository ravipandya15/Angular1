import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppfComponent } from './appf/appf.component';



@NgModule({
  declarations: [AppfComponent],
  imports: [
    CommonModule
  ],
  exports:[AppfComponent]
})
export class FeatureModule { }
