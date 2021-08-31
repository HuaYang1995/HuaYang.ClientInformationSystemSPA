import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';
import { InteractionComponent } from './interaction/interaction.component';
import { HeaderComponent } from './Core/Layout/header/header.component';
import { AddclientComponent } from './client/addclient/addclient.component';
import { FormsModule } from '@angular/forms';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { AddinteractionComponent } from './interaction/addinteraction/addinteraction.component';
import { UpdateclientComponent } from './client/updateclient/updateclient.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
import { UpdateinteractionComponent } from './interaction/updateinteraction/updateinteraction.component';
import { DeleteclientComponent } from './client/deleteclient/deleteclient.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { DeleteinteractionComponent } from './interaction/deleteinteraction/deleteinteraction.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClientComponent,
    EmployeeComponent,
    InteractionComponent,
    AddclientComponent,
    AddemployeeComponent,
    AddinteractionComponent,
    UpdateclientComponent,
    UpdateemployeeComponent,
    UpdateinteractionComponent,
    DeleteclientComponent,
    DeleteemployeeComponent,
    DeleteinteractionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
