import { Component, OnInit } from '@angular/core';
import { Updateinteraction } from 'src/app/Core/Shared/model/updateinteraction';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/Core/services/interaction.service';


@Component({
  selector: 'app-updateinteraction',
  templateUrl: './updateinteraction.component.html',
  styleUrls: ['./updateinteraction.component.css']
})
export class UpdateinteractionComponent implements OnInit {

  interaction:Updateinteraction={
    id:null,
    clientId:null,
    empId:null,
    intType:'',
    intDate:null,
    remarks:''
  };


  
  constructor(private interactionsService:InteractionService, private router:Router) { }

  ngOnInit(): void {
  }

  updateInteraction(){
    this.interactionsService.updateinteraction(this.interaction).subscribe(
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
