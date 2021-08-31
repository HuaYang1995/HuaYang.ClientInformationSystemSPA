import { Component, OnInit } from '@angular/core';
import { Deleteemployee } from 'src/app/Core/Shared/model/deleteemployee';
import { EmployeeService } from 'src/app/Core/services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {

  employee:Deleteemployee ={
    id:null,
 

  };
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteEmployee(){
    this.employeeService.deleteemployee(this.employee).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['']);
          console.log("Successfully create client");
        } 
        else {
          console.log("Unable to create client")
        }
      }

    );
  }

}
