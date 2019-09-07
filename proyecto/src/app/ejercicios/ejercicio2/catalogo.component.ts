import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { ProductoInterface } from 'src/app/interfaces/producto.interface';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  title = "ejercicio 2 leer y escribir  base datos firebase"
  constructor(public infoDB: InfoPaginaService,
    public prodService: ProductosService,
    private router:Router) {

  }
  opcion="";
  listaProductos=this.prodService.products;
  arreglo: ProductosService[] = [];

  listar(opcion) {
    let temp:any;
    if (opcion == "") {
      return this.listaProductos
    } else {
      for (let item of this.listaProductos) {
        if (opcion === item.cod) {
          temp = { categoria: item.categoria, id: item.cod, titulo: item.titulo, url: item.url };
          this.arreglo.push(temp);
        }
      }
    }
    return this.arreglo;
  }



  buscar(termino:string)
  {
    termino.length<4?"":this.router.navigate(['/search', termino ]);
  }



}
