import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { BasicComponent } from './basic/basic.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    BasicComponent,
    InterpolationComponent,
    ClassbindingComponent,
    StylebindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
