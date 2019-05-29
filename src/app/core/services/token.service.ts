import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  RebirthHttp,
  RebirthHttpProvider,
  Headers,
  POST,
  Body,
  Query,
  BaseUrl
} from 'rebirth-http';
import { Observable } from 'rxjs';

@BaseUrl('')
@Injectable({
  providedIn: 'root'
})
export class TokenService extends RebirthHttp {
  private static STORAGE_TOKEN_KEY = 'auth-token';
  private static STORAGE_USERID_KEY = 'user-id';
  private static STORAGE_USERNAME_KEY = 'user-name';
  private static STORAGE_LINKIDS_KEY = 'link-ids';

  constructor(http: HttpClient) {
    super(http);
  }

  @POST('/auth')
  public getTokenInfo(
    username: string,
    password: string,
    grant_type?: string
  ): Observable<any> {
    return null;
  }

  public setToken(token: string): void {
    localStorage.setItem(TokenService.STORAGE_TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TokenService.STORAGE_TOKEN_KEY);
  }

  public resetToken(): void {
    localStorage.removeItem(TokenService.STORAGE_TOKEN_KEY);
  }

  public setUserId(userId: string) {
    localStorage.setItem(TokenService.STORAGE_USERID_KEY, userId);
  }

  public resetUserId() {
    localStorage.removeItem(TokenService.STORAGE_USERID_KEY);
  }

  public getUserId() {
    return localStorage.getItem(TokenService.STORAGE_USERID_KEY);
  }

  public setUserName(username: string) {
    localStorage.setItem(TokenService.STORAGE_USERNAME_KEY, username);
  }

  public getUserName() {
    return localStorage.getItem(TokenService.STORAGE_USERNAME_KEY);
  }

  public resetUserName() {
    localStorage.removeItem(TokenService.STORAGE_USERNAME_KEY);
  }

  public setLinkIds(linkIds: string) {
    localStorage.setItem(TokenService.STORAGE_LINKIDS_KEY, linkIds);
  }

  public getLinkIds() {
    return localStorage.getItem(TokenService.STORAGE_LINKIDS_KEY);
  }

  public resetLinkIds() {
    localStorage.removeItem(TokenService.STORAGE_LINKIDS_KEY);
  }
}
