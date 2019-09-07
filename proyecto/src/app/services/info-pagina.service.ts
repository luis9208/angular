import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    //leer archivo json
    this.cargaInfo();
    this.cargarArray();
  }

  private cargaInfo() {
    this.http.get('assets/data/data-catalogo.json').subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;

      }
    );
  }

  private cargarArray() {
    this.http.get('https://ejercicio9agosto.firebaseio.com/equipo.json').subscribe(
      (resp: any[]) =>
      {
        this.equipo=resp;
        console.log(resp);
        
      }
    );
  }
}
