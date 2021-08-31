import { Component, OnInit } from '@angular/core';
import { Deleteclient } from 'src/app/Core/Shared/model/deleteclient';
import { ClientService } from 'src/app/Core/services/client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deleteclient',
  templateUrl: './deleteclient.component.html',
  styleUrls: ['./deleteclient.component.css']
})
export class DeleteclientComponent implements OnInit {

  client: Deleteclient = {
    id:null,

    
  
  };
   

  constructor(private clientSerivce: ClientService,private router: Router) { }


  ngOnInit(): void {
  }

  DeleteClient(){
    this.clientSerivce.deleteclient(this.client).subscribe(
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
