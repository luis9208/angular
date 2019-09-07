import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './ejercicios/ejercicio2/catalogo.component';
import { ObjetosListaComponent } from './ejercicios/ejercicio1/objetos-lista.component';
import { MainComponent } from './ejercicios/main/main.component';
import { SearchComponent } from './ejercicios/ejercicio2/search/search.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'lista-objetos', component: ObjetosListaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
