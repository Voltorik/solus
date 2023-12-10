import { Component, OnInit} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 0;
  lon: number = 0;
  forecast: Observable<any> = of();

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
        });
      } else {
        // default coords
        this.lat = 40.73;
        this.lon = -73.93;
      }
  }

  getForecast() {
    this.forecast = this.weather.currentForcast(this.lat, this.lon).pipe(
      tap((data: any) => console.log(data))
    )
  }
}
