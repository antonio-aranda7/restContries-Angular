import { Component, OnInit } from '@angular/core';
import { paisesService } from '../paises.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit{
  
    banderas : any ;

    constructor(public  paisServise:paisesService) { }
    ngOnInit() {
      this.paisServise.getCountries().subscribe(data =>{
        this.banderas = data;
      });
    }
}
  