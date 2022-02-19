import { Component, OnDestroy, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/negocio.service';
import { SearchService } from 'src/app/services/search.service';
import { Item } from '../men/item.interface';

@Component({
  selector: 'app-women',
  templateUrl: '../men/men.component.html',
  styleUrls: ['../men/men.component.scss']
})
export class WomenComponent implements OnInit, OnDestroy {
  optionsSelect: Array<any>;

  items: Item[] = [];

  // Inyectamos el servicio en el constructor para poder llamar al servicio
  constructor(private negocioService: NegocioService, private searchService: SearchService) {
    this.items = this.negocioService.getItemsWomen();
    this.searchService.setMostrar(true);
   }

  ngOnInit(): void {
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
  }

  ngOnDestroy(): void {
    this.searchService.setMostrar(false);
  }

}
