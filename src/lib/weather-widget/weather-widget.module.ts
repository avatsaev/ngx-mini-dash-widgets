import {ModuleWithProviders, NgModule} from '@angular/core';

import {WeatherWidgetComponent} from './components/weather-widget.component';
import {WeatherService, WeatherServiceConfig} from './services/weather.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [WeatherWidgetComponent],
    exports: [WeatherWidgetComponent]
})

export class WeatherWidgetModule {
    static forRoot(config: WeatherServiceConfig): ModuleWithProviders {
        return {
            ngModule: WeatherWidgetModule,
            providers: [
                WeatherService,
                {provide: WeatherServiceConfig, useValue: config}
            ]
        }
    }
}
