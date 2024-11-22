import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoadorListaComponent } from './doador-lista/doador-lista.component'; 
import { DoadorCadastroComponent } from './cadastro/cadastro.component'; 
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DoadorListaComponent,
    DoadorCadastroComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
