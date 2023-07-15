//Variables 
var gasKey = "WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y";
var gasUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&fuel_type=BD,RD&access=public";

var searchInput; //jquery to input div later

// added gmaps API + fetch tests below.
var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
var geocode = "https://maps.googleapis.com/maps/api/geocode/json?address="+ address + gmapsKey;
var reverseGeocode = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + gmapsKey;




//APIS

//Javascript = Our code manipulating the web
//Third-Party = others manipulating our code (HTML)
//Server Side APIs = document.getElementById

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


//function 

x+6=11 
x

function() {
   
   var x;
   = console.log("banana cream")
}

function()









//event listeners


/*
Variables
   Conditionals 
      Loops 
         Functions -
            Objects - Other Objects / Nouns 
               Arrays - Values 
               */