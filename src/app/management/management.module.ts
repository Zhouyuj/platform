import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { CoreModule } from '../core/core.module';
import { ChangePWD } from './changePWD/changePWD.component';
import { IconComponent } from './icon/icon.component';
import { ManagementService } from './management.service';

@NgModule({
  declarations: [ManagementComponent, IconComponent],
  imports: [
    // BrowserModule,
    // NgZorroAntdModule,
    // FormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    ManagementRoutingModule,
    CoreModule
  ],
  providers: [ManagementService],
  exports: [IconComponent]
})
export class ManagementModule {}
