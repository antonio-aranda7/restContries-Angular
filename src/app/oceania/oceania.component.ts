import { Component, OnInit } from '@angular/core';
import { paisesService } from '../paises.service';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})

export class OceaniaComponent implements OnInit {

  banderas : any ;

  constructor(public  paisServise:paisesService) { }
    ngOnInit() {
      this.paisServise.getOceania().subscribe(data =>{
      this.banderas = data;
    });
  }
}
