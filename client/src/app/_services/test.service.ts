import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  weather() {
    return this.http.get<any>("https://localhost:5001/WeatherForecast");
  }
}
