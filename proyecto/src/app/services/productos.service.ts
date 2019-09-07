import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  products= [];
  constructor(private http: HttpClient) {
    this.cargar();
  }

  private cargar() {
    this.http.get('https://ejercicio9agosto.firebaseio.com/productos_idx.json').subscribe(
      (resp:ProductoInterface[])=>
      {
       
        this.products=resp;
        this.cargando = false;
      }
    );
  }



  
}
