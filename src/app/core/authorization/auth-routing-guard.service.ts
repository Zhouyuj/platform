import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRoutingGuardService {
  private url: string;

  constructor(private tokenService: TokenService, private router: Router) {
    this.url = 'login';
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLogin = this.tokenService.getToken();
    if (!isLogin) {
      this.tokenService.resetToken();
      this.tokenService.resetUserId();
      this.tokenService.resetUserName();
      this.tokenService.resetLinkIds();
      this.router.navigateByUrl(this.url);
    }
    return !!isLogin;
  }
}
