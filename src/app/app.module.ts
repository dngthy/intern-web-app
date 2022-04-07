import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersManagementModule } from 'src/app/pages/users-management/users-management.module';
import { HttpClientModule } from '@angular/common/http';
import { ToggleThemeSwitchModule } from './components/toggle-theme-switch/toggle-theme-switch.module';
import { StoreModule } from '@ngrx/store';
import { userManageReducer } from './store/reducers/user-manage.reducer';
import { LoginModule } from './pages/login/login.module';
import { EffectsModule } from '@ngrx/effects';
import { UserManageEffects } from './store/effects/user-manage.effects';
import { UserService } from './services/user.service';
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
    StoreModule.forRoot({userManage: userManageReducer}),
    LoginModule,
    EffectsModule.forRoot([UserManageEffects])
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
