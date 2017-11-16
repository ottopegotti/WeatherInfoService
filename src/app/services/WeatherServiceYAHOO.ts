import { Injectable,OnInit }    from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 


@Injectable()
export class WeatherInfoServiceYAHOO {
    private weatherInfoUrl = '/api';  // URL to web api
    
     constructor(private http: Http) { }
    
     GetWeatherInfo(latitude:number,longitude:number): Observable<Response> {
       const url = `${this.weatherInfoUrl}`+"/getweatherYAHOO/"+`${latitude}/${longitude}`;
       return this.http.get(url)
         .map((response:Response) => response);        
     } 
     
     GetCity(latitude:number,longitude:number):Promise<string> {
       const url = `${this.weatherInfoUrl}`+"/getcity/"+`${latitude}/${longitude}`;      
       return this.http.get(url)
         .toPromise()
         .then(response => response.json() as string)
         .catch((error)=>this.handleError(error));
     } 
        
     private handleError(error: any): Promise<any> {
       return Promise.reject(error.message || error);
        
       
     }
}