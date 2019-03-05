import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ]
})
export class ManagerModule { }
