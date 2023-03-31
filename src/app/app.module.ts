import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeoresModule } from './heroes/heores.module';
import { ContadoresModule } from './contadores/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeoresModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
