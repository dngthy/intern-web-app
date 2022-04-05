import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateUserModule } from './create-user/create-user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule, CreateUserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
