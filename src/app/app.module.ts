import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/data.service';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoremeService } from './shared/storeme.service';
import { StoremeComponent } from './storeme/storeme.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    StoremeComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routes,
    InMemoryWebApiModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100, passThruUnknownUrl: true }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOboylNx9pht9dkBEBvI04HdP8AfJOL-M'
    })
  ],
  providers: [StoremeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
