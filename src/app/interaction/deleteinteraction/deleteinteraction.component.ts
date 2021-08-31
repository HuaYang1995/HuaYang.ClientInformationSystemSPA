import { Component, OnInit } from '@angular/core';
import { Deleteinteraction } from 'src/app/Core/Shared/model/deleteinteraction';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/Core/services/interaction.service';
@Component({
  selector: 'app-deleteinteraction',
  templateUrl: './deleteinteraction.component.html',
  styleUrls: ['./deleteinteraction.component.css']
})
export class DeleteinteractionComponent implements OnInit {

  interaction:Deleteinteraction={
    id:null

  };


  
  constructor(private interactionsService:InteractionService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteInteraction(){
    this.interactionsService.deleteinteraction(this.interaction).subscribe(
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
