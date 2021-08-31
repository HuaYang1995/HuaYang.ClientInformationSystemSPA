import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from '../Shared/model/client';
import { environment } from 'src/environments/environment';
import{map} from 'rxjs/operators';
import { interactionfromclient } from '../Shared/model/interactionfromclient';
import { Addclient } from '../Shared/model/addclient';

@Injectable({
  providedIn: 'root'
})


export class ClientService {

  private header:HttpHeaders;

  constructor(private http:HttpClient) { 
    this.header=new HttpHeaders();
    this.header.append('content-type', 'application/json');

  }

  getAllClients():Observable<Clients[]>{

    return this.http.get(`${environment.apiUrl}`+`Clients`)
    .pipe( map(resp => resp as Clients[])
 
      )
     }

     getInteractionOfClientById(id?:number):Observable<interactionfromclient[]>{
       return this.http.get(`${environment.apiUrl}`+`Clients/`+id).pipe(
         map(resp => resp as interactionfromclient[])
       )
     }

     addclient(addclient:any):Observable<any>{

      return this.http.post(`${environment.apiUrl}` + 'Clients/addclient',addclient,{headers:this.header})
      .pipe(map((response) => response))
     }

     updateclient(updateclient:any):Observable<any>{

      return this.http.put(`${environment.apiUrl}` + 'Clients/updateclient',updateclient,{headers:this.header})
      .pipe(map((response) => response))
     }

     deleteclient(deleteclient:any):Observable<any>{
    
  
      return this.http.delete(`${environment.apiUrl}` + 'Clients/deleteclient',deleteclient)
      .pipe(map((response) => response))
     }
  }


     

