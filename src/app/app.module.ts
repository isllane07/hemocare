import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Importando ReactiveFormsModule
import { AppComponent } from './app.component';
import { DoadorComponent } from './doador/doador.component';  // Importando DoadorComponent
import { DoadorService } from './doador.service';  

@NgModule({
  declarations: [
    AppComponent,    
    DoadorComponent  
  ],
  imports: [
    BrowserModule,      
    ReactiveFormsModule  
  ],
  providers: [DoadorService], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
