import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';
import { AuthRoutingGuardService } from '../core/authorization/auth-routing-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    canActivate: [AuthRoutingGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule {}
