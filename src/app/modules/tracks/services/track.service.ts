import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
   private readonly URL = environment.api
  
  constructor(private http: HttpClient) {

   }
   getAllTracks$(): Observable<any> {
return this.http.get(`${this.URL}/tracks`)
.pipe(
   map(({data}: any) => {
    return {data}.data
    })
    )
   }


   getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
       map(({data}: any) => {
        return {data}.data.reverse()
        })
        )
       }
}
