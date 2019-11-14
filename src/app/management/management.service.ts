import {
  RebirthHttp,
  Body,
  POST,
  GET,
  BaseUrl,
  DefaultHeaders
} from "rebirth-http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@BaseUrl(environment.API_URL)
@Injectable({
  providedIn: "root"
})
@DefaultHeaders({ "Content-Type": "application/json" })
export class ManagementService extends RebirthHttp {
  constructor(http: HttpClient) {
    super(http);
  }

  @POST("/changePWD")
  public changePWD(userId: number, password: string): Observable<any> {
    return null;
  }

  @POST("/link/list")
  public getAllIcons(): Observable<any> {
    return null;
  }
}
