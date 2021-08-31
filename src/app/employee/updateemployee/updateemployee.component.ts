import { Component, OnInit } from '@angular/core';
import { Updateemployees } from 'src/app/Core/Shared/model/updateemployee';
import { EmployeeService } from 'src/app/Core/services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  employee:Updateemployees ={
    id:null,
    name:'',
    password:'',
    designation:''

  };
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.employeeService.updateemployee(this.employee).subscribe(
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
