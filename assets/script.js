/*Variables Below
___________________________________________*/
var gasKey = "WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y";
var gasUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&access=public";

//fuel_type=BD,RD&access=public";

var cityApiKey ="1dIcTElI66WvN1pN1tuvnw==sPZpayHEUdUki5rP";
var cityApiLink= "https://api.api-ninjas.com/v1/city?name=";

var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
var geocodeLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var reverseGeoLink = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

var formContainerEl = document.getElementById("form-container");
var userInputEl = document.getElementById("search-input");
var btnEl = document.getElementById("search-button"); 
var fuelTypeInput= document.getElementById("fuel-type-input")




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
   var fuelTypeInput = userInputEl.value

   runApi(fuelTypeInput);
}
function runApi(fuelTypeInput) {
  var apiURL = gasUrl + "&fuel_type=" + fuelTypeInput;
  fetch(apiURL)
  .then(function (response) {
     return response.json();
  })
  .then(function (data) {
     console.log(data);

//      fetch(gasUrl)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
// });

     // create elements. temperatureEl, humidityEl, windEl, dateEl, iconEl
     //dateEl in Unix, convert to MM-DD-YYYY format
     //attach elements to 'currentContainer'
    //  var h2El = document.createElement('h2')
     // add text content to the element
    //  h2El.textContent = data.name;
     // append the element to the currentContainer
    //  currentContainer.append(h2El)
  })
}



// potential Search function --
function searchGasStation(){
  var cityInput=document.getElementById('user-input').value;
   var fuelTypeInput=document.getElementById('fuel-type-input').value; // need to add more to this function this is just a start (TM-07/15)


  findGasStations(cityInput,fuelTypeInput) //This function is taking in the city and fuel type parameters. in this function we will use API to FETCH the gas station data. 
}

function findGasStations(city, fuelTypeInput){
}



//FUNCTION TO DISPLAY RESULTS

function displayGastStations(gasStations){
  var resultContainer= document.getElementsByClassName("results-container");
  resultsContainer.innerHTML= '';//
}

// gasStations.forEach((station) => {
//   var stationElement= document.createElement('div');
//   //Populate stationElement with station details (Name, address,etc..)
//   resultContainer.appendChild(stationElement);
// });
// "forEach is used to itterate over each element in the gasStation array"// for each "station" in the "gasStations" array the callback function is executed.
//created a new div as a container for the gas station details
//append 'stationElement' as a child of 'resultsContainer' element. This adds the gas station container to the DOM making it visible on the webpage.

/*Event Listeners Below
___________________________________________*/
//formContainerEl.addEventListener("submit", handleUserInput) 
btnEl.addEventListener("click", handleUserInput);

/*
Variables
   Conditionals 
      Loops 
         Functions -
            Objects - Other Objects / Nouns 
               Arrays - Values 
               */