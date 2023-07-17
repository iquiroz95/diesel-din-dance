// ***Please read all comments before coding. This will help us keep track of where we are.***

/* Variables Below
___________________________________________*/
var gasKey = "WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y";
var gasApiUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&access=public";

var cityApiKey ="1dIcTElI66WvN1pN1tuvnw==sPZpayHEUdUki5rP";
var cityApiLink= "https://api.api-ninjas.com/v1/city?name=";

var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
var geocodeLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var reverseGeoLink = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

var formEl = document.getElementById("search-form");
var zipInputEl = document.getElementById('search-input');
var fuelTypeInputEl = document.getElementById("fuel-type");
var btnEl = document.getElementById("search-button"); 
var resultsContainer = document.getElementById("results-container");

/*Functions Below
___________________________________________*/
// Goal: When an input is entered on the webpage, it can be part of our fetch API issues. - Aaron
   //What data are we getting? -User's location in City/Zip
   //Where do we get it? - url: api + city + key
   //How do we include it? - Declare variables. Create a function to get data. pass data on to another function. -Aaron
   

function handleUserInput(event) {
   event.preventDefault()
   var fuelTypeInput = fuelTypeInputEl.value;
   var zipInput = zipInputEl.value;
   runFuelApi(fuelTypeInput,zipInput);
}

function runFuelApi(fuelType,zip) {
  var urlFuel = gasApiUrl + "&fuel_type=" + fuelType + "&zip=" + zip + "&limit=5"
  fetch(urlFuel)
  .then(function (response) {
     return response.json();
  })
  .then(function (data) {
   // data.forEach(this)
      console.log(data.fuel_stations[0,1,2].zip)
     })
  }




function searchGasStation(){
  var cityInput=document.getElementById('user-input').value;
   var fuelTypeInput=document.getElementById('fuel-type-input').value; 
   
// need to add more to this function this is just a start (TM-07/15)


findGasStations(cityInput,fuelTypeInput) 
//This function is taking in the city and fuel type parameters. in this function we will use API to FETCH the gas station data. 
}

function findGasStations(city, fuelTypeInput){
}


//FUNCTION TO DISPLAY RESULTS

function displayGastStations(gasStations){
  var resultContainer= document.getElementsByClassName("results-container");
  resultsContainer.innerHTML= '';//
}

/*Event Listeners Below
_____________________________________________________________*/

formEl.addEventListener("submit", handleUserInput);



//The event listener above uses <form>. This allows everything inside the form container to be listened to. 
// btnEl.addEventListener("click", handleUserInput); 
// fuelTypeInputEl.addEventListener("click",handleUserInput);
// cityInputEl.addEventListener("", handleUserInput);

     
/* Comments
_______________________________________________________________*/
/*  Explaining Previous code.
If you check line 78, that line is after the event.preventDefault.  That's why it keeps resetting.   However, that line is included in the runApi function, which is why it ran. 

Before, we only had one event listener.  the only event being listened to was the button. Once I added the fuelTypeInput to the event listeners, now it prevents default and saves the new values. 

This does create the issue of constantly runningApi when you click the dropdown menu, as now the eventListener listens to every event of the input, but it works fine, so I'm keeping it for now.
-Aaron 7/16
*/

// potential Search function -- This might require another API. Yes, we can locate the gas stations, as the city parameter is part of the gas API. However, we need to use the mapping API to get to that location. Hopefully google as an easy API for getting your current location.  -AL 7/16
/*the code under here is not necessary. All this function does is add parameters to the URL. Once the parameters are added properly, then we can search for specific things. What happens is your drop down menu adds the search parameter ("&fuel_type="... BD/ELEC/RD/LPG)... Now, we need to add the city parameters. The hard part might be the 2nd api, which will get the location of the user and map them to the gas station. That might be easy though...? 
-Aaron 7/16
*/

/*  - this method is how we will create outputs into the results container, but we need to add the city parameter first.

     var h2El = document.createElement("h2")
     h2El.textContent = data.station_counts.fuels;
     var resultsContainer = document.getElementsByClassName("results-container")[0];
     resultsContainer.append(h2El);
*/  




/* Commented out code
_____________________________________________________________________*/

// gasStations.forEach((station) => {
//   var stationElement= document.createElement('div');
//   //Populate stationElement with station details (Name, address,etc..)
//   resultContainer.appendChild(stationElement);
// });
// "forEach is used to itterate over each element in the gasStation array"// for each "station" in the "gasStations" array the callback function is executed.
//created a new div as a container for the gas station details
//append 'stationElement' as a child of 'resultsContainer' element. This adds the gas station container to the DOM making it visible on the webpage.

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

/*

// function runCityApi(city) {
//    var cityUrl = gasApiUrl + "&city=" + city + "&limit=5";
//    fetch(cityUrl)
//    .then(function (response) {
//       return response.json();
//    })
//    .then(function (data) {
//       console.log(data);
//    })
//  }

Variables
   Conditionals 
      Loops 
         Functions -
            Objects - Other Objects / Nouns 
               Arrays - Values 
               */
