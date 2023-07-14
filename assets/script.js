var gasKey = "WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y";
var gasUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&fuel_type=BD,RD&access=public";

var cityApiKey ="1dIcTElI66WvN1pN1tuvnw==sPZpayHEUdUki5rP"
var searchInput; //jquery to input div later

// added gmaps API + fetch tests below.

var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
var address = "1600 Ampihitheatre Parkway, Mountain View, CA";
var geocode = "https://maps.googleapis.com/maps/api/geocode/json?address="+ address + gmapsKey;
var cityApiLink= "https://api.api-ninjas.com/v1/city?name="

var lat = "40.714224";
var long = "-73.961452";

var reverseGeocode = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + gmapsKey;


// fetch call should be in function that it controls (eventhandler on search that calls funtion with this api) input filled saved as cityName
// $("#searchBtn").on("click")function(){
//   var cityName;}
// fetch(cityApiLink+cityName,{
//   method:"GET",
//   headers:{
//     "Content-Type":"application/json",
//     "X-Api-Key":cityApiKey
//   }

// })
// .then(function(response){
//   return response.json();
// })
// .then(function(data){
//   console.log(data)
// })



 console.log(gasUrl);


fetch(gasUrl)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
});


fetch(geocode)
.then(function (response) {
   return response.json();
   })
   .then(function (data) {
   console.log(data);
   });

fetch(reverseGeocode)
.then(function(response) {
   return response.json();
   })
   .then(function(data) {
     console.log(data);
   })

  //  First function getCity which will have eventlistener on search button and create new var cityName;

  // Function that uses city name to find gas stations with users choices of fuel type (reverse geocode)