import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_services/test.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public data: any;


  constructor(private weatherService: TestService) { }

  ngOnInit(): void {
    this.data = this.weatherService.weather();
  }

}
