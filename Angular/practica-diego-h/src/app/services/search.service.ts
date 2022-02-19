import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  mostrar : boolean = false;

  constructor() { 
    console.log("%csoy constructor de SearchService", "color: green");
  }

  getMostrar(){
    return this.mostrar;
  }

  setMostrar(nuevo:boolean){
    this.mostrar = nuevo;
  }
}
