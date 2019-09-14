import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TransactonVirement} from "../../classes/transactonVirement";
import {Observable} from "rxjs";
import {Operationsimple} from "../../classes/operationsimple";
import {Operationvirement} from "../../classes/operationvirement";

/*
  Generated class for the OperationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperationsProvider {

  constructor(public http: HttpClient) {}

  virer(data : TransactonVirement){
    return this.http.post('http://localhost:9999/compte-service/comptes/virer' , data) ;
  }

  getTransactionStandard(id : number): Observable<Operationsimple[]>{
    return this.http.get<Operationsimple[]>('http://localhost:9999/transaction-standard-service/transactions/compte/' + id ) ;
  }

  getTransactionvirement(id : number) : Observable<Operationvirement[]>{
    return this.http.get<Operationvirement[]>('http://localhost:9999/transaction-virement-service/transactions/compte/' + id ) ;
  }

  postTransactionVirement(data : Operationvirement){
    return this.http.post('http://localhost:9999/transaction-virement-service/transactions' , data) ;
  }
}
