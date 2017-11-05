
var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBbuhO75JD7qTDz-SPKko-77qO2_hypNp4', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

exports.GetReverseGeoCoding= (latitude,longitude)=>{
    return geocoder.reverse({lat:latitude, lon:longitude});   
}


