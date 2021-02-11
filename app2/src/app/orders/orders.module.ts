import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ApiConfig } from '../apiconfig';
import { LogService } from '../log.service';
import { apiconfigvalue } from '../apiconfig.value';

export const configValue : ApiConfig={
  EndPoint : 'order.com',
  Token:'145632'
}

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[{provide:apiconfigvalue, useValue:configValue}]
})
export class OrdersModule { }
