import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './client/addclient/addclient.component';
import { ClientComponent } from './client/client.component';
import { DeleteclientComponent } from './client/deleteclient/deleteclient.component';
import { UpdateclientComponent } from './client/updateclient/updateclient.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
import { HomeComponent } from './home/home.component';
import { AddinteractionComponent } from './interaction/addinteraction/addinteraction.component';
import { DeleteinteractionComponent } from './interaction/deleteinteraction/deleteinteraction.component';
import { InteractionComponent } from './interaction/interaction.component';
import { UpdateinteractionComponent } from './interaction/updateinteraction/updateinteraction.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"clients/:id",component:ClientComponent},
  {path:"employees/:id",component:EmployeeComponent},
  {path:"interaction",component:InteractionComponent},
  {path:"addclient",component:AddclientComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"addinteraction",component:AddinteractionComponent},
  {path:"updateclient", component:UpdateclientComponent},
  {path:"updateemployee",component:UpdateemployeeComponent},
  {path:"updateinteraction",component:UpdateinteractionComponent},
  {path:"deleteclient",component:DeleteclientComponent},
  {path:"deleteemployee",component:DeleteemployeeComponent},
  {path:"deleteinteraction",component:DeleteinteractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
