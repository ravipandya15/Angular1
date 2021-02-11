import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { GlobalerrorService } from './globalerror.service';
import { LogService } from './log.service';
import { UpdatedlogService } from './updatedlog.service';
import { FeatureModule } from './feature/feature.module';
import { ApiConfig } from './apiconfig';
import { apiconfigvalue } from './apiconfig.value';

const flag = false;
const getLog = () =>{
  if (flag){
      return new LogService(configValue)
  }
  else{
     return new UpdatedlogService
  }
}

export const configValue : ApiConfig={
  EndPoint : 'app.com',
  Token:'123456'
}

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [
    FeatureModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [{provide:ErrorHandler, useClass : GlobalerrorService},
              //  {provide:LogService, useClass:LogService},
              // providers:[{provide:LogService, useFactory:getLog}],
  //             {provide:UpdatedlogService, useExisting:LogService}],
  //for erorr handler use Global Error service
  providers:[{provide:apiconfigvalue, useValue:configValue}],
  bootstrap: [AppComponent]
})
export class AppModule { }
