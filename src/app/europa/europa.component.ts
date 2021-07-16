import { Component, OnInit } from '@angular/core';
import { paisesService } from '../paises.service';

@Component({

  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {

  banderas : any ;

  constructor(public  paisServise:paisesService) { }
    ngOnInit() {
      this.paisServise.getEuropa().subscribe(data =>{
      this.banderas = data;
    });
  }
}

