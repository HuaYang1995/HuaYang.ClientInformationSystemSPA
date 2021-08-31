import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Core/services/client.service';
import { EmployeeService } from '../Core/services/employee.service';
import { Clients } from '../Core/Shared/model/client';
import { Employees } from '../Core/Shared/model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients!:Clients[];
  employees!:Employees[];
  constructor(private clientService:ClientService,private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.clientService.getAllClients().subscribe(
      c => {
        this.clients = c;
        console.log('inside home component init method');
        console.log(this.clients);
      }
    );

    this.employeeService.getAllEmployees().subscribe(
      e => {
        this.employees = e;
        console.log('inside home component init method');
        console.log(this.employees);
      }
    );
  }

}
