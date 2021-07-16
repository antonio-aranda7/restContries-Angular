import { Component, OnInit } from '@angular/core';
import { paisesService } from '../paises.service';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})

export class AmericaComponent implements OnInit {

  banderas : any ;

  constructor(public  paisServise:paisesService) { }
  ngOnInit() {
      this.paisServise.getAmerica().subscribe(data =>{
      this.banderas = data;
    });
  }
}
