import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagFormComponent } from './bag-form/bag-form.component';
import { ChoasBagDeciderComponent } from './choas-bag-decider/choas-bag-decider.component';

@NgModule({
  declarations: [
    AppComponent,
    BagFormComponent,
    ChoasBagDeciderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
