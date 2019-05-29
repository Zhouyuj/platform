import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    // BrowserModule,
    // NgZorroAntdModule,
    // FormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    LoginRoutingModule,
    CoreModule
  ],
  providers: [LoginService]
})
export class LoginModule {}
