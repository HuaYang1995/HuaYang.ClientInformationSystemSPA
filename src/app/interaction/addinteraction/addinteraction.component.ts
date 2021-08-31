import { Component, OnInit } from '@angular/core';
import { Addinteraction } from 'src/app/Core/Shared/model/addinteraction';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/Core/services/interaction.service';
@Component({
  selector: 'app-addinteraction',
  templateUrl: './addinteraction.component.html',
  styleUrls: ['./addinteraction.component.css']
})
export class AddinteractionComponent implements OnInit {

  interaction:Addinteraction={
    clientId:null,
    empId:null,
    intType:'',
    intDate:null,
    remarks:''
  };


  
  constructor(private interactionsService:InteractionService, private router:Router) { }

  ngOnInit(): void {
  }

  addInteraction(){
    this.interactionsService.addinteraction(this.interaction).subscribe(
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
