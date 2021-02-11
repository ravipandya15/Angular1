import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { FormsModule } from '@angular/forms';
import { ProductsearchPipe } from './productsearch.pipe';
import { ChildComponent } from './child/child.component';
import { ChangeColorDirectiveDirective } from './change-color-directive.directive';
import { CreditcardDirective } from './creditcard.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ProductsearchPipe,
    ChildComponent,
    ChangeColorDirectiveDirective,
    CreditcardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
