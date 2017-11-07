import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';

// modules
import { NgxAdminLteModule } from 'ngx-admin-lte';
import { ChartsModule } from 'ng2-charts';
// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {FMIWeatherComponent} from './pages/FMIWeather/FMIWeather.component'

//services
import {WeatherInfoServiceFMI} from './services/WeatherServiceFMI';
import {WeatherInfoServiceYAHOO} from './services/WeatherServiceYAHOO';
const pages = [
    HomeComponent,
    PageNumComponent,
    LoginComponent,
    RegisterComponent,
    FMIWeatherComponent
];

// main bootstrap
import { routing } from './app.routes';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    MenuWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    ChartsModule,
    routing
  ],
  providers: [
    WeatherInfoServiceFMI,
    WeatherInfoServiceYAHOO
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MenuWidgetComponent
  ]
})
export class AppModule { }
