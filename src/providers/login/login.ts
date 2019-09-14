import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from "rxjs";
import { Client } from "../../classes/client";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public httpclient: HttpClient) {}

  getClient(username: string, password: string): Observable<Client>{
    return this.httpclient.post<Client>("http://localhost:9999/client-service/clients/login",
      {
        "numClient": username,
        "codeSecret": password
      })
  }



}
