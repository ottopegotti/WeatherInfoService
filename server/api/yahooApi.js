var https=require('https');

exports.GetWeatherInfo = function (city) {    
        return new Promise( function(resolve,reject){        
            var locationUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+city+'")&format=json&env=store://datatables.org/alltableswithkeys';
        
            https.get(locationUrl, function (res) {
                res.setEncoding('binary');    
                var resData = "";
                res.on('data', function (chunk) {
                    return resData += chunk;
                });
                res.on('end', function () {
                    var result = JSON.parse(resData);
                    resolve( result );
                });
                res.on('error',(err)=>console.log(err));
            });        
        });
}

