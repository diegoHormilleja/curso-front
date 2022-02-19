import { Component, OnDestroy, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/services/negocio.service';
import { SearchService } from 'src/app/services/search.service';
import { Item } from './item.interface';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit, OnDestroy{
  optionsSelect: Array<any>;
  items: Item[] = [];

  // Inyectamos el servicio en el constructor para poder llamar al servicio
  constructor(private negocioService: NegocioService, private searchService: SearchService) {
    // this.items = this.negocioService.getItems();
    this.searchService.setMostrar(true);
   }

  ngOnInit(): void {
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];

    this.negocioService.getItems().subscribe((datos) => {
      // console.log(datos);

      // Limpiamos de datos el array de Cervezas
      this.items = [];

      datos.forEach(element => {
        let data = element.payload.doc.data();
        let identificador = element.payload.doc.id;

        this.items.push({
          id: identificador,
          title: data.title,
          descripcion: data.descripcion,
          category: data.category,
          precio: data.precio,
          image: data.image,
          image_details: data.image_details
        })
      });
    });
    
  }

  ngOnDestroy():void{
    this.searchService.setMostrar(false);
  }



}



