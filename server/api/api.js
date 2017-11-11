
var  fmiApi=require('./fmiApi'),
     googleApi=require('./googleApi'),
     yahooApi=require('./yahooApi');
    

// GET

// api/getweatherinfoFMI/:latitude/:longitude
exports.GetLocalWeatherInfoFMI = (req, res)=>{
    googleApi.GetReverseGeoCoding(req.params.latitude,req.params.longitude)
    .then((data)=>{
         var city= (data[0].city==undefined)?data[0].extra.neighborhood:data[0].city;
         fmiApi.GetWeatherInfo(city)
         .then((result)=>{
            res.json(JSON.stringify(result));
         })
         .catch(err=>{
             console.log(err);
             res.json(new Error("FMI Weather Service hasn't been succeeded!"));
        });          
    })
    .catch(err=>{
        console.log(err);
        res.json(new Error("Reverse geo coding hasn't been succeeded!"));
    });       
};

// api/getweatherinfoYAHOO/:latitude/:longitude
exports.GetLocalWeatherInfoYAHOO = (req, res)=>{
    googleApi.GetReverseGeoCoding(req.params.latitude,req.params.longitude)
    .then((data)=>{
         var city= (data[0].city==undefined)?data[0].extra.neighborhood:data[0].city;
         yahooApi.GetWeatherInfo(city)
         .then((result)=>{
            res.json(JSON.stringify(result));
         })
        .catch(err=>{
            console.log(err);
            res.json(new Error("Yahoo weather service hasn't been succeeded!"));
        });              
    })
    .catch(err=>{
        console.log(err);
        res.json(new Error("Reverse geo coding hasn't been succeeded!"));
    });     
};


// api/getcity/:latitude/:longitude
exports.GetCity=(req,res)=>{
    googleApi.GetReverseGeoCoding(req.params.latitude,req.params.longitude)
    .then((result)=>{
        res.json((result[0].city==undefined)?result[0].extra.neighborhood:result[0].city);        
    })      
    .catch(err=>{
        console.log(err);
        res.json(new Error("Reverse geo coding hasn't been succeeded!"));
    });   
}

exports.login = function (req, res) {
    console.log('*** login');
    var userLogin = req.body.userLogin;
    var userName = userLogin.userName;
    var password = userLogin.password;
    //Simulate login
    res.json({ status: true });
};

exports.logout = function (req, res) {
    console.log('*** logout');
    //Simulate logout
    res.json({ status: true });
};