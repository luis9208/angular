import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { CatalogoComponent } from './ejercicios/ejercicio2/catalogo.component';
import { ObjetosListaComponent } from './ejercicios/ejercicio1/objetos-lista.component';
import { MainComponent } from './ejercicios/main/main.component';
import { HeaderComponent } from './ejercicios/ejercicio2/header/header.component';
import { FooterComponent } from './ejercicios/ejercicio2/footer/footer.component';
import { SearchComponent } from './ejercicios/ejercicio2/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ObjetosListaComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
