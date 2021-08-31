import { Component, OnInit } from '@angular/core';
import { Updateclient } from 'src/app/Core/Shared/model/updateclient';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Core/services/client.service';
@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  client: Updateclient = {
    id:null,
    email: '',
    name: '',
    phones:'',
    address:'',
    
  
  };
  constructor(private clientSerivce: ClientService,private router: Router) { }


  ngOnInit(): void {
  }

  updateClient(){
    this.clientSerivce.updateclient(this.client).subscribe(
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
