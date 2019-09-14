import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Compte} from "../../classes/compte";
import {Adresse} from "../../classes/adresse";
import {Client} from "../../classes/client";

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientProvider {

  constructor(public httpclient: HttpClient) {}

  getCompteByIdClient(id: number) : Observable<Compte[]>{
    return this.httpclient.get<Compte[]>('http://localhost:9999/compte-service/comptes/client/' + id) ;
  }
  getAdresseByClientId(id : number) :Observable<Adresse>{
    return this.httpclient.get<Adresse>('http://localhost:9999/adresse-client-service/adresses/client/' + id) ;
  }
  patchAdresse(adresse : Adresse , id :number){
    return this.httpclient.patch('http://localhost:9999/adresse-client-service/adresses/' + id ,adresse)
  }

  patchClient(client : Client , id :number){
    return this.httpclient.patch('http://localhost:9999/client-service/clients/' + id ,client)
  }


  getClients() : Observable<Client[]>{
    return this.httpclient.get<Client[]>('http://67d8bd6f.ngrok.io/client-service/clients') ;
  }
}
