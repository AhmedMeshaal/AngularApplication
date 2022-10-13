import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImageAPIService {
  // private url = 'https://api.imgflip.com/get_memes';

  constructor(private httpClient: HttpClient) { }

  // getMemes() {
  //   return this.httpClient.get(this.url);
   // console.log(this.httpClient.get(this.url));
    // return console.log(this.httpClient.get(this.url));
  // }


  getMemes(): Observable<any> {
    return this.httpClient.get(`https://api.imgflip.com/get_memes`).pipe(
      tap(async (res: any) => {
        console.log(res);
      })
    );
  }
}
