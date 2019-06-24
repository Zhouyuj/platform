import { Component, OnDestroy, HostListener } from '@angular/core';
import { InterceptorsService } from './core/interceptors/interceptors.service';
import { TokenService } from './core/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private interceptorService: InterceptorsService,
    private tokenService: TokenService
  ) {
    this.interceptorService.registerInterceptors();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler() {
    this.tokenService.resetToken();
    this.tokenService.resetLinkIds();
    this.tokenService.resetUserId();
    this.tokenService.resetUserName();
  }
}
