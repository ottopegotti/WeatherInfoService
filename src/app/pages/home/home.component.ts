import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService, Message, MessagesService, User } from 'ngx-admin-lte';
import { WeatherInfoServiceYAHOO } from '../../services/WeatherServiceYAHOO';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  public latitude: number;
  public longitude: number;
  public city: string;
  public weatherInfos: any;
  public imglink: string;
  public imglink1: string;
  public imglink2: string;
  public imglink3: string;
  public imglink4: string;
  public imglink5: string;

  public lineChartData: Array<any> = [{ data: [] }, { data: [] }];
  public lineChartLabels: Array<any> = ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5',
    'DAY6', 'DAY7', 'DAY8', 'DAY9', 'DAY10'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ////////////////

  constructor(private weatherInfoServiceYAHOO: WeatherInfoServiceYAHOO,
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService,
    private router: Router
  ) {
    // TODO
  }

  public GetWeatherInfo() {
    this.weatherInfoServiceYAHOO.GetWeatherInfo(this.latitude, this.longitude)
      .subscribe(
      (data) => {
        this.weatherInfos = JSON.parse(data.json());

        ///charts
        this.lineChartData = [
          {
            data: [
              this.weatherInfos.query.results.channel.item.forecast[0].low,
              this.weatherInfos.query.results.channel.item.forecast[1].low,
              this.weatherInfos.query.results.channel.item.forecast[2].low,
              this.weatherInfos.query.results.channel.item.forecast[3].low,
              this.weatherInfos.query.results.channel.item.forecast[4].low,
              this.weatherInfos.query.results.channel.item.forecast[5].low,
              this.weatherInfos.query.results.channel.item.forecast[6].low,
              this.weatherInfos.query.results.channel.item.forecast[7].low,
              this.weatherInfos.query.results.channel.item.forecast[8].low,
              this.weatherInfos.query.results.channel.item.forecast[9].low], label: 'Low Temperatures'
          },
          {
            data: [
              this.weatherInfos.query.results.channel.item.forecast[0].high,
              this.weatherInfos.query.results.channel.item.forecast[1].high,
              this.weatherInfos.query.results.channel.item.forecast[2].high,
              this.weatherInfos.query.results.channel.item.forecast[3].high,
              this.weatherInfos.query.results.channel.item.forecast[4].high,
              this.weatherInfos.query.results.channel.item.forecast[5].high,
              this.weatherInfos.query.results.channel.item.forecast[6].high,
              this.weatherInfos.query.results.channel.item.forecast[7].high,
              this.weatherInfos.query.results.channel.item.forecast[8].high,
              this.weatherInfos.query.results.channel.item.forecast[9].high], label: 'High Temperatures'
          }
        ];
        ///
        this.imglink1 = `/public/assets/img/icons/${this.weatherInfos.query.results.channel.item.forecast[0].text}.png`;
        this.imglink2 = `/public/assets/img/icons/${this.weatherInfos.query.results.channel.item.forecast[1].text}.png`;
        this.imglink3 = `/public/assets/img/icons/${this.weatherInfos.query.results.channel.item.forecast[2].text}.png`;
        this.imglink4 = `/public/assets/img/icons/${this.weatherInfos.query.results.channel.item.forecast[3].text}.png`;
        this.imglink5 = `/public/assets/img/icons/${this.weatherInfos.query.results.channel.item.forecast[4].text}.png`;

      },
      error => this.HandleError(error)
      );
  }

  public GetCity() {
    this.weatherInfoServiceYAHOO.GetCity(this.latitude, this.longitude)
      .then((city) => {
        this.city = city;
        if (city != 'Turku' && city != 'Tampere' && city != 'Helsinki')
          this.imglink = `/public/assets/img/weather.jpg`;
        else
          this.imglink = `/public/assets/img/${city}.jpg`;
      })
      .catch((error) => this.HandleError(error));
  }

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.setCurrent({
      description: 'HomePage',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        }
      ]
    });
    new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(
        (position) => resolve(position),
        (err) => {
          reject("Retrieving Geolocation problem on your browser!");
        }, { timeout: 10000 }
      );
    })
      .then((position: Position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      })
      .then(_ => {
        this.GetCity();
        this.GetWeatherInfo();
      })
      .catch((err) => this.HandleError(err));

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }
  public HandleError(error: any) {
    alert(error);
    this.router.navigate(['login']);
  }


}



