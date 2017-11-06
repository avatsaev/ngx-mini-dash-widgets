import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators/map';


export class WeatherServiceConfig {
    url: string;
    appId: string;
}

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient, private conf: WeatherServiceConfig) {}

  getCityWeather(city: string): Observable<{ min: number, max: number }> {
    return this.http
      .get(`${this.conf.url}/weather?q=${city}&units=metric&appid=${this.conf.appId}`)
      .pipe(
        map(r => ({
          min: r['main']['temp_min'],
          max: r['main']['temp_max']
        }))
      );
  }

}
