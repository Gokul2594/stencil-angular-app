import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebComponentsModule } from 'src/libs/web-components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
