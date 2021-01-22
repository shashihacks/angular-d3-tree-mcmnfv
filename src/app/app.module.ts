import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularD3TreeLibModule } from 'angular-d3-tree';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularD3TreeLibModule, NgxGraphModule  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
