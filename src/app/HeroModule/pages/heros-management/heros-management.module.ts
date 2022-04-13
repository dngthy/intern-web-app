import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosManagementComponent } from './heros-management.component';
import { HeroListModule } from '../../components/hero-list/hero-list.module';



@NgModule({
  declarations: [HerosManagementComponent],
  imports: [
    CommonModule,
    HeroListModule
  ],
  exports: [HerosManagementComponent]
})
export class HerosManagementModule { }
