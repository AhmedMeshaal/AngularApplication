import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {IEmployee} from "../model/interface/IEmployee";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  // Create JSON data file
  private jsonUrl:string= "/assets/data/employees.json";

  // Create local Variable for HttpClient as DI
  constructor(private httpClient: HttpClient) { }


//  Http Get
  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.jsonUrl).pipe(

      tap(async (res: any) => {
        console.log(res);


      })
    );

  }
}
