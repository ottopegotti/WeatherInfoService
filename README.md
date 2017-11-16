## A weather application with angular and express(node.js) and bootstraping ngx-admin-lte is used as a 3rdparty tool

In the development phase, I implemented server side and client side as different projects.
I combined those two projects for deploying to heroku under single address. 

## Files coded by me
Server side (Node.js application)
------------
```
/server.js
/api/*
/src
```

## Client side (Angular 4 app)
------------
```
/src/models/*
/src/services/*
/src/pages/FMIWeather/*
/src/pages/home/*
```

What this app does?
Get GPS location through Phone location API via HTML5 Geocoding API. 
Then by reverse geocoding, it matches the location with the city. 
Finally displays public weather data for that location from FMI API and Yahoo Weather API

In this assignment the technology is free to choose (WEB, iOS native, Android Native)
I chose WEB.

UI Design is free to do whatever feels comfortable
I used (3rd party angular admin panel) 

Additional features are of course a plus but not required
Application retrieves data from Yahoo Weather API

Source code & app should be shared for review (GIT repocitory etc)
https://github.com/ottopegotti/WeatherInfoService/

## Demo view 
![Preview](https://github.com/ottopegotti/WeatherInfoService/blob/master/heroku_demo1.PNG)
![Preview](https://github.com/ottopegotti/WeatherInfoService/blob/master/heroku_demo.PNG)

## Lauching
```
npm install
ng build
node server
```

## 3rd party admin panel UI

https://github.com/TwanoO67/ngx-admin-lte
