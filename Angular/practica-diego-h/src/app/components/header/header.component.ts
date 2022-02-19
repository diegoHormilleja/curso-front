import { Component, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/negocio.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  mostrar: boolean;

  constructor(private searchService: SearchService) {
    this.mostrar = this.searchService.getMostrar();
    console.log("%csoy constructor de header.component", "color: red");
   }

  ngOnInit(): void {
    console.log("%csoy ngOnInit de header.component", "color: red");
    console.log("");
  }

}
