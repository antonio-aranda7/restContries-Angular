import { Component, OnInit} from '@angular/core';
import { paisesService } from '../paises.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.css']
})

export class MasinfoComponent implements OnInit{
  
  banderas : any ;
  component: any;

  constructor(public  paisServise:paisesService,private route: ActivatedRoute) { }
  ngOnInit() {
    this.getCountry();
  }
  getCountry() {
    const routeParams = this.route.snapshot.params;
    this.component = this.paisServise.getCountry(routeParams.name).subscribe(res => {
      this.banderas = res[0];
      console.log(this.banderas);
    });
  }
}

