import { Injectable } from '@angular/core';
import { RebirthHttp, RebirthHttpProvider } from 'rebirth-http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService extends RebirthHttp {
  constructor(
    http: HttpClient,
    private rebirthHttpProvider: RebirthHttpProvider,
    private tokenService: TokenService,
    private router: Router
  ) {
    super(http);
  }

  public registerInterceptors() {
    let url = 'http://182.61.36.66:8085';
    this.rebirthHttpProvider
      .baseUrl(url)
      .addInterceptor({
        request: (request: HttpRequest<any>) => {
          const token = this.tokenService.getToken();
          if (token) {
            return request.clone({
              setHeaders: { Authorization: token }
            });
          }
          return request;
        }
      })
      .addResponseErrorInterceptor(err => {
        console.error('ResponseError::', err);
        if (err.status === 401 || err.status === 403) {
          this.tokenService.resetToken();
          this.tokenService.resetUserId();
          this.tokenService.resetUserName();
          this.tokenService.resetLinkIds();
          this.router.navigateByUrl('/login');
        }
      });
  }
}
