import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { AuthRoutingGuardService } from './core/authorization/auth-routing-guard.service';
import { ChangePWD } from './management/changePWD/changePWD.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: 'index',
    loadChildren: './management/management.module#ManagementModule'
  },
  {
    path: 'changePWD',
    component: ChangePWD,
    canActivate: [AuthRoutingGuardService]
  },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
