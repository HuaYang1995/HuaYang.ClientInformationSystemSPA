import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Core/services/employee.service';
import { Addemployee } from 'src/app/Core/Shared/model/addemployee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee:Addemployee ={
    name:'',
    password:'',
    designation:''

  };

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService.addemployee(this.employee).subscribe(
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
