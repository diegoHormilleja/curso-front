import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from 'src/app/services/negocio.service';
import { Item } from '../men/item.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: string = '';
  item: Item = null;

  constructor(private ruta: ActivatedRoute, private negocioService: NegocioService) {

    this.id = this.ruta.snapshot.params.codigo;
    this.item = null;


    // Ahora pido los datos desde el constructor porque no tiene sentido
    // mostrar la pantalla al usuario si no tiene datos
    this.negocioService.buscarItem(this.id).subscribe((item)=>{
      console.log(item);
      let data = item.payload.data();
      let identificador = item.payload.id;
      this.item = {
        id: identificador,
        title: data.title,
        descripcion: data.descripcion,
        category: data.category,
        precio: data.precio,
        image: data.image,
        image_details: data.image_details
      };
    });

    
  }

  ngOnInit(): void {
  }

}
