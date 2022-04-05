import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersManagementModule } from 'src/app/components/users-management/users-management.module';
import { HttpClientModule } from '@angular/common/http';
import { ToggleThemeSwitchModule } from './components/toggle-theme-switch/toggle-theme-switch.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    UsersManagementModule,
    HttpClientModule,
    ToggleThemeSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
