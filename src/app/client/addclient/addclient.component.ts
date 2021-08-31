import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Core/services/client.service';
import { ClientComponent } from '../client.component';
import { Addclient } from 'src/app/Core/Shared/model/addclient';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  client: Addclient = {
    id:0,
    email: '',
    name: '',
    phones:'',
    address:'',
    
  
  };
   

  constructor(private clientSerivce: ClientService,private router: Router) { }

  ngOnInit(): void {
 
  }

  addClient(){
    this.clientSerivce.addclient(this.client).subscribe(
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


