import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable, tap, of } from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  users: Observable<any> = of();

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.users = this.weather.getUserData().pipe(
      tap((data: any) => console.log(data))
    )
  }
}
