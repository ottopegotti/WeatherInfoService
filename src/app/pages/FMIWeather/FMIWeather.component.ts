import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';
import {WeatherInfoServiceFMI} from '../../services/WeatherServiceFMI';
import {WeatherInfoFMI} from '../../models/WeatherInfoFMI';

@Component({
  selector: 'app-fmi',
  styleUrls: ['./FMIWeather.component.css'],
  templateUrl: './FMIWeather.component.html'
})
export class FMIWeatherComponent implements OnInit, OnDestroy {

  public latitude: number;
  public longitude: number;
  public city: string;
  public weatherInfos: WeatherInfoFMI[];
  public  imglink:string;

  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService,
    private weatherInfoServiceFMI:WeatherInfoServiceFMI) 
    {   
      
  }

public GetWeatherInfo(){    
    this.weatherInfoServiceFMI.GetWeatherInfo(this.latitude,this.longitude)
      .subscribe(
        data=>this.weatherInfos= data,
        error=>this.HandleError(error)
      );  
  }

  public GetCity(){    
    this.weatherInfoServiceFMI.GetCity(this.latitude,this.longitude)
      .then((city)=>{
        this.city=city;
        if(city!='Turku' && city!='Tampere' &&city!='Helsinki')
        this.imglink=`/public/assets/img/weather.jpg`;
        else
        this.imglink=`/public/assets/img/${city}.jpg`;
      })
      .catch((error)=>this.HandleError(error));
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
    new Promise((resolve,reject)=>{
      navigator.geolocation.watchPosition(
        (position)=> resolve(position),
        (err)=>reject(err)
      );   
    })
    .then((position:Position)=>{
        this.latitude=position.coords.latitude;     
        this.longitude=position.coords.longitude;
    })
    .then(_=>{
        this.GetCity();
        this.GetWeatherInfo();
    })
    .catch((err)=>this.HandleError(err)); 

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

  public HandleError(error:any){

  }

}
