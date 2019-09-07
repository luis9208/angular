import { Component, OnInit } from '@angular/core';


export interface Grado {
  id: String;
  nombre: string;
}

export interface Estudiante {
  id: string;
  nombre: string;
  idCurso: string;
}

@Component({
  selector: 'app-objetos-lista',
  templateUrl: './objetos-lista.component.html',
  styleUrls: ['./objetos-lista.component.scss']
})
export class ObjetosListaComponent {

  opcion=0;
  arreglo: Estudiante[] = [];
  title = "Ejercicio del 02-08-2019";

  grados: Grado[] = [
    { id: "0", nombre: "Filtro por grado" },
    { id: "1", nombre: "Grado Primero" },
    { id: "2", nombre: "Grado Segundo" },
    { id: "3", nombre: "Grado Tercero" },

  ]

  listaEstudiantes: Estudiante[] = [
    { id: "11", nombre: "Estudiante Uno", idCurso: "1" },
    { id: "12", nombre: "Estudiante Dos", idCurso: "2" },
    { id: "13", nombre: "Estudiante Tres", idCurso: "3" },
    { id: "14", nombre: "Estudiante Cuatro", idCurso: "1" },
    { id: "15", nombre: "Estudiante Cinco", idCurso: "2" },
    { id: "16", nombre: "Estudiante Seis", idCurso: "3" },
    { id: "17", nombre: "Estudiante Siete", idCurso: "1" },
    { id: "18", nombre: "Estudiante Ocho", idCurso: "2" },
    { id: "19", nombre: "Estudiante Nueve", idCurso: "3" },
    { id: "20", nombre: "Estudiante Diez", idCurso: "1" },
    { id: "21", nombre: "Estudiante Once", idCurso: "2" }
  ]

  getNombreGrado(id: string) {
    return this.grados.find(temp => temp.id === id).nombre
  }

  listar(opcion) {
    let temp: Estudiante;
    if (opcion == 0) {
      return this.listaEstudiantes
    } else {
      for (let item of this.listaEstudiantes) {
        if (opcion === item.idCurso) {
          temp = { id: item.id, nombre: item.nombre, idCurso: item.idCurso };
          this.arreglo.push(temp);
        }
      }
    }
    return this.arreglo;
  }

}
