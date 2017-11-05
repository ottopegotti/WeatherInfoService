import { Injectable,OnInit }    from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {WeatherInfoYAHOO} from '../models/WeatherInfoYAHOO';

@Injectable()
export class WeatherInfoServiceYAHOO {
    constructor() {
        
    }
}