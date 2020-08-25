import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import {FormsModule} from '@angular/forms';
import {CountryTabComponent} from './components/tabs/country-tab.component';
import {ComparisonsTabComponent} from './components/tabs/comparisons-tab.component';
import {MapTabComponent} from './components/tabs/map-tab.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {WorldTabComponent} from './components/tabs/world-tab.component';
@NgModule({
  declarations: [
    AppComponent,
    CountryTabComponent,
    ComparisonsTabComponent,
    MapTabComponent,
    WorldTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
