import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{map} from 'rxjs/operators';
import { Addinteraction } from '../Shared/model/addinteraction';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private header:HttpHeaders;
  constructor(private http:HttpClient) { 
    this.header=new HttpHeaders();
    this.header.append('content-type', 'application/json');
  }

  addinteraction(interaction:any):Observable<any>{

    return this.http.post(`${environment.apiUrl}` + 'Interactions/addinteraction',interaction,{headers:this.header})
    .pipe(map((response) => response))
   }

   updateinteraction(updateinteraction:any):Observable<any>{

    return this.http.put(`${environment.apiUrl}` + 'Interactions/updateinteraction',updateinteraction,{headers:this.header})
    .pipe(map((response) => response))
   }

   deleteinteraction(deleteinteraction:any):Observable<any>{
    
  
    return this.http.delete(`${environment.apiUrl}` + 'Interactions/deleteinteraction',deleteinteraction)
    .pipe(map((response) => response))
   }
}
