import { Component, OnInit } from '@angular/core';
import { paisesService } from '../paises.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})

export class AsiaComponent implements OnInit {

  banderas : any ;

  constructor(public  paisServise:paisesService) { }
  ngOnInit() {
      this.paisServise.getAsia().subscribe(data =>{
      this.banderas = data;
    });
  }
}

