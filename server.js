var express = require('express'),
bodyParser = require('body-parser'),
session = require('express-session'),
api = require('./server/api/api'),
cors = require('cors');
const path=require ('path');

app = express();

app.use(express.static(path.join(__dirname,'dist')));
app.use(session({ 
    secret: 'LocalWeather', 
    saveUninitialized: true,
    resave: true 
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.options('*', cors());
var baseUrl = '/api/';
app.get(baseUrl+'getweatherFMI/:latitude/:longitude',api.GetLocalWeatherInfoFMI);
app.get(baseUrl+'getweatherYAHOO/:latitude/:longitude',api.GetLocalWeatherInfoYAHOO);
app.get(baseUrl+'getcity/:latitude/:longitude',api.GetCity);

app.post(baseUrl + 'login', api.login);
app.post(baseUrl + 'logout', api.logout);

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

//process.env.PORT or 8080
app.listen(process.env.PORT, function () {
    console.log("CustMgr Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});