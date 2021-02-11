import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ApiConfig } from '../apiconfig';
import { LogService } from '../log.service';
import { apiconfigvalue } from '../apiconfig.value';

export const configValue : ApiConfig={
  EndPoint : 'customers.com',
  Token:'963852'
}
@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{provide:apiconfigvalue, useValue:configValue}]
})
export class CustomersModule { }
