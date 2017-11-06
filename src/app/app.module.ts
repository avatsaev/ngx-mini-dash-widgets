import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WeatherWidgetModule} from '@ngx-mini-dash/widgets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherWidgetModule.forRoot({
        url: 'https://api.openweathermap.org/data/2.5',
        appId: 'df0b392e150a3ba2725f5e39081fe06a'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
