import { Injectable } from '@angular/core';
import {
  RebirthHttp,
  POST,
  BaseUrl,
  RequestOptions,
  Header,
  DefaultHeaders,
  Body
} from 'rebirth-http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@BaseUrl('http://182.61.36.66:8085')
@Injectable({
  providedIn: 'root'
})
@DefaultHeaders({ 'Content-Type': 'application/json' })
export class LoginService extends RebirthHttp {
  constructor(http: HttpClient) {
    super(http);
  }

  @POST('/getAccessToken')
  public auth(@Body password: string): Observable<any> {
    return null;
  }
}
