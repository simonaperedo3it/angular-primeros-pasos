import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadoresModule } from './contadores/contador.module';
import { HeoresModule } from './heroes/heores.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeoresModule,
    ContadoresModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
