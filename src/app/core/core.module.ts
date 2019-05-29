import { NgModule } from '@angular/core';
import { AuthRoutingGuardService } from './authorization/auth-routing-guard.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RebirthHttpModule } from 'rebirth-http';
import { InterceptorsService } from './interceptors/interceptors.service';
import { MessageService } from './services/message.service';
import { TokenService } from './services/token.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    RebirthHttpModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule
    // RebirthHttpModule
  ],
  declarations: [],
  providers: [
    AuthRoutingGuardService,
    InterceptorsService,
    MessageService,
    TokenService
  ]
})
export class CoreModule {}
