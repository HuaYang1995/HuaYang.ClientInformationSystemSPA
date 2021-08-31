import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService} from '../Core/services/employee.service';
import { interactionfromemployee } from '../Core/Shared/model/interactionfromemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  getinteractionfromemployees!:interactionfromemployee[];
  ids!: string | null;
  id!: number | null;
  constructor(private route: ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.ids = params.get('id');
      } 
    )
    this.getInteractionFromEmployee();
  }

  private getInteractionFromEmployee(){
    this.id=this.ids as unknown as number;
    this.employeeService.getInteractionOfEmployeeById(this.id).subscribe(e=>{
      this.getinteractionfromemployees =e;
      console.log('inside employee component init method');
      console.log(this.getinteractionfromemployees);
    });
  }

}
