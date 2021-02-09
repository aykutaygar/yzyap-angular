import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBlocklyModule } from 'ngx-blockly';
import { BlocklyComponent } from './component/blockly/blockly.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBlocklyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BlocklyComponent]
})
export class AppModule { }
