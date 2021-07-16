import { Component, OnInit } from '@angular/core';
import { paisesService } from '../paises.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})

export class AfricaComponent implements OnInit {

  banderas : any ;

  constructor(public  paisServise:paisesService) { }
  ngOnInit() {
      this.paisServise.getAfrica().subscribe(data =>{
      this.banderas = data;
    });
  }
}
