/*Variables Below
___________________________________________*/
var gasKey = "WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y";
var gasUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&fuel_type=BD,RD&access=public";

var cityApiKey ="1dIcTElI66WvN1pN1tuvnw==sPZpayHEUdUki5rP";
var cityApiLink= "https://api.api-ninjas.com/v1/city?name=";

var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
var geocodeLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var reverseGeoLink = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

var formContainerEl = document.getElementById("form-container");
var userInputEl = document.getElementById("search-input");
var btnEl = document.getElementById("search-button"); 




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

/*Fetch Api Below - will be part of functions
___________________________________________*/
// fetch(gasUrl)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
// });

// fetch(geocode)
// .then(function (response) {
//    return response.json();
//    })
//    .then(function (data) {
//    console.log(data);
//    });

// fetch(reverseGeocode)
// .then(function(response) {
//    return response.json();
//    })
//    .then(function(data) {
//      console.log(data);
//    })

/*Functions Below
___________________________________________*/
// Goal: When an input is entered on the webpage, it can be part of our fetch API issues. - Aaron
   //What data are we getting? -User's location in City/Zip
   //Where do we get it? - url: api + city + key
   //How do we include it? - Declare variables. Create a function to get data. pass data on to another function. 

function handleUserInput(event) {
   event.preventDefault()
   var inputData = userInputEl.value

   runApi(inputData);
}




/*Event Listeners Below
___________________________________________*/
formContainerEl.addEventListener(click, handleUserInput)

/*
Variables
   Conditionals 
      Loops 
         Functions -
            Objects - Other Objects / Nouns 
               Arrays - Values 
               */