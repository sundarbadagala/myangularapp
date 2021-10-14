import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { BasicComponent } from './basic/basic.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { TwowaydataComponent } from './twowaydata/twowaydata.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    BasicComponent,
    InterpolationComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplatereferenceComponent,
    TwowaydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
