import { Component, Input,OnInit } from '@angular/core';
import { Clients } from '../Core/Shared/model/client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../Core/services/client.service';
import { interactionfromclient } from '../Core/Shared/model/interactionfromclient';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  getinteractionfromclients!:interactionfromclient[];
  ids!: string | null;
  id!: number | null;
  constructor(private route: ActivatedRoute,private clientService:ClientService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.ids = params.get('id');
      }
    )
    this.getInteractionFromClient();
  }

  private getInteractionFromClient(){
    this.id=this.ids as unknown as number;
    this.clientService.getInteractionOfClientById(this.id).subscribe(c=>{
      this.getinteractionfromclients =c;
      console.log('inside client component init method');
      console.log(this.getinteractionfromclients);
    });
  }

}
