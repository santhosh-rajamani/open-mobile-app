import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoOpenComponent } from './auto-open/auto-open.component';
import { ManualOpenComponent } from './manual-open/manual-open.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoOpenComponent,
    ManualOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
