import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Employees } from '../Shared/model/employee';
import { interactionfromemployee } from '../Shared/model/interactionfromemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private header:HttpHeaders;
  constructor(private http: HttpClient) {
    this.header=new HttpHeaders();
    this.header.append('content-type', 'application/json');
   }

  getAllEmployees(): Observable<Employees[]> {

    return this.http.get(`${environment.apiUrl}` + `Employees`)
      .pipe(map(resp => resp as Employees[])

      )
  }

  getInteractionOfEmployeeById(id?: number): Observable<interactionfromemployee[]> {
    return this.http.get(`${environment.apiUrl}` + `Employees/` + id).pipe(
      map(resp => resp as interactionfromemployee[])
    )
  }

  addemployee(addemployee:any):Observable<any>{

    return this.http.post(`${environment.apiUrl}` + 'Employees/addemployee',addemployee,{headers:this.header})
    .pipe(map((response) => response))
   }


   updateemployee(updateemployee:any):Observable<any>{

    return this.http.put(`${environment.apiUrl}` + 'Employees/updateemployee',updateemployee,{headers:this.header})
    .pipe(map((response) => response))
   }

   deleteemployee(deleteemployee:any):Observable<any>{
    
  
    return this.http.delete(`${environment.apiUrl}` + 'Employees/deleteemployee',deleteemployee)
    .pipe(map((response) => response))
   }
}
