import { Component, OnInit } from '@angular/core';
import {
  User,
  MenuService,
  Message,
  MessagesService,
  NotificationsService,
  Notification,
  LogoService,
  FooterService
} from 'ngx-admin-lte';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define your footer links
  private footer = {
      left_part: `<strong>
        Copyright &copy; 2017
        <a href="http://www.weberantoine.fr" >WEBER Antoine</a>.
    	</strong>
      Open-source Sharing`,
      right_part: 'Bootstrapping Ngx-Admin-LTE',
    };
  // define here your own links menu structure
  private mylinks: any = [
    {
      'title': 'Yahoo Weather Service',
      'icon': 'yahoo',
      'link': ['/']
    },
    {
      'title': 'FMI Weather Service',
      'icon': 'dashboard',
      'link': ['/fmi']
    },
    {
      'title': 'Linkedin Profile',
      'icon': 'linkedin',
      'link': ['https://www.linkedin.com/in/utku-kapucu-0b569a12'],
      'external': true,
      'target': '_blank'
    },
    {
      'title': 'Github',
      'link': ['https://github.com/ottopegotti/WeatherInfoService'],
      'icon': 'github',
      'external': true,
      'target': '_blank'
    },
   
    // external widget
    {
      class: MenuWidgetComponent,
      data: {
        label: 'test widget'
      }
    }
  ];
  // define here your logo
  private logo = {
    html_mini: 'NG<b>X</b>',
    html_lg: '<b>NGX</b>Admin-LTE',
  };

  constructor(
    private footerServ: FooterService,
    private menuServ: MenuService,
    private logoServ: LogoService,
    private msgServ: MessagesService,
    private notifServ: NotificationsService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrent(this.mylinks);

    this.footerServ.setCurrent(this.footer);
    this.logoServ.setCurrent(this.logo);

    // FAKE MESSAGE
    // defining some test users
    /*const user1 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'weber.antoine.pro@gmail.com',
        firstname: 'WEBER',
        lastname: 'Antoine'
    });
    const user2 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });
    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'd\'un message d\'une importance extreme',
        destination: user1,
        title: 'un message super important'
    }) );
    // sending a test notif
    this.notifServ.addNotification( new Notification( {
        class: 'fa fa-users text-aqua',
        content: '5 new members joined today',
        link: '/page/2'
    }) );*/


  }

}
