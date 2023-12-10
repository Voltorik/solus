import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
readonly ROOT_URL = 'http://localhost:5050/v1/weather/forecast';

  constructor(private http: HttpClient) { }

  currentForcast(lat: number, lon: number): Observable<any> {
    let params = new HttpParams()
    params = params.set('lat', lat.toString())
    params = params.set('lon', lon.toString())

    return this.http.get(this.ROOT_URL, { params })
  }
}
