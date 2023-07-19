// ***Please read all comments before coding. This will help us keep track of where we are.***

/* Variables Below
___________________________________________*/
document.addEventListener("DOMContentLoaded", function(){ // this ensures the code executre only after the HTML doc has finished loading. may take down later ..

var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
var geocodeLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var reverseGeoLink = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

var formEl = document.getElementById("search-form");
var zipInputEl = document.getElementById('search-input');
var fuelTypeInputEl = document.getElementById("fuel-type");
 
var resultsContainer = document.getElementById("results-container");




"85c64b60-259a-11ee-ba64-cd4912edca12"
var ZipCodeUrl= "https://app.zipcodebase.com/api/v1/code/city?apikey=85c64b60-259a-11ee-ba64-cd4912edca12"


   

function handleUserInput(event) {
   event.preventDefault();
   var fuelTypeInput = fuelTypeInputEl.value;
   var zipInput = zipInputEl.value;
   runFuelApi(fuelTypeInput, zipInput)
   .then(function(cityInfo){
    console.log(cityInfo)
   })
   .catch(function(error){
    console.log(error);
   });
}

//




function runFuelApi(fuelType, city){
  fetch("https://app.zipcodebase.com/api/v1/code/city?apikey=85c64b60-259a-11ee-ba64-cd4912edca12&city="+city+"&country=us&limit=")
  .then(function(response){
    return response.json(); // we are given a return of multiple zip codes and want to turn them into an ARRAY so we can enter them in out gasAPI url.
  })
  .then(function(data){
    console.log(data); 
    var zips = data.results.join(",") //taking our zip codes found in data.results and forming an array with a comma to separate the zip codes to follow gasAPI documentation.
    console.log(zips) //
getGasStations(zips)// now running ZIPS (array) Through the getGasStations Functions and gas API
  })
}

function getGasStations(zips){
var gasApiUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&access=public&zip="+zips+"&limit=50"; //added zips parameter to API URL
  fetch( gasApiUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(DataView);
    displayResults(data.fuel_stations) //Went through this path to get list of fuel_stations based on zips array
  })
}

function displayResults(gasStations){
   resultsContainer.innerHTML = "";
  for (var i = 0; i < gasStations.length; i++){ // itterate through the array of gas stations we are given from results of gasAPI
    var gasStation = gasStations[i]
   var addressEl = document.createElement("li")// create a list element to display list of results
    addressEl.innerText= gasStation.street_address //pulling the street address from the gasStations array
    document.querySelector(".results-container").appendChild(addressEl)//append the address of gas stations!
    
  }

}
/*Event Listeners Below
_____________________________________________________________*/

formEl.addEventListener("submit", handleUserInput);

})



