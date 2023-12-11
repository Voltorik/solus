import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private forecastUrl = 'http://localhost:5050/v1/weather/forecast';
private userDataUrl = 'http://localhost:5050/v1/weather';

  constructor(private http: HttpClient) { }

  currentForcast(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString());

    return this.http.get(this.forecastUrl, { params });
  }

  postUserData(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString());
    return this.http.post(this.userDataUrl, '', { params });
  }

  getUserData(): Observable<any> {
    return this.http.get(this.userDataUrl);
  }
}
