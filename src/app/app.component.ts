import { Component } from '@angular/core';
import {Widget, WeatherWidget, CryptoWidget} from '@ngx-mini-dash/widgets/core/models/widget';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <weather-widget
            [widget]="weatherWidget"
            [refreshInterval]="1000"
            (onUpdateRequest)="onWidgetUpdate($event)"
    ></weather-widget>
    
  `,
  styles: []
})
export class AppComponent {
  weatherWidget = new WeatherWidget('Strasbourg', 20, 30);
  cryptoWidget = new CryptoWidget('BTC', 'ETH');


  onWidgetUpdate(w: Widget) {
    console.log(w);
  }

}
