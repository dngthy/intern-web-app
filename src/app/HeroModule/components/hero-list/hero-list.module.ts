import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import { HeroManageEffects } from 'src/app/CoreModule/store/effects/hero-manage.effects';
import { EffectsModule } from '@ngrx/effects';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([HeroManageEffects]),
    NzMessageModule,
    NzTableModule
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }
