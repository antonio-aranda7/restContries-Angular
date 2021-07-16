import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropaComponent } from './europa/europa.component';
import { MasinfoComponent } from './masinfo/masinfo.component';
import { OceaniaComponent } from './oceania/oceania.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AfricaComponent,
    AmericaComponent,
    AsiaComponent,
    EuropaComponent,
    MasinfoComponent,
    OceaniaComponent
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
