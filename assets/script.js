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
var btnEl = document.getElementById("search-button"); 
var resultsContainer = document.getElementById("results-container");

// var smartyAuthID = "d981697d-7ffd-45a7-bf5a-4d725c190cd0"
// var smartyAuthToken =  'tjB4Cv3Plir0aCF25En8'
// var smartyUrl = "https://us-zipcode.api.smarty.com/lookup?"


"85c64b60-259a-11ee-ba64-cd4912edca12"
var smartyUrl= "https://app.zipcodebase.com/api/v1/code/city?apikey=85c64b60-259a-11ee-ba64-cd4912edca12"

/*Functions Below
___________________________________________*/
// Goal: When an input is entered on the webpage, it can be part of our fetch API issues. - Aaron
   //What data are we getting? -User's location in City/Zip
   //Where do we get it? - url: api + city + key
   //How do we include it? - Declare variables. Create a function to get data. pass data on to another function. -Aaron
   

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
  // var urlFuel= gasApiUrl + "&fuel_type=" + fuelType + "&latitude=" + latitude + "&longitude=" + longitude + "&limit=5";
   //var urlFuel= gasApiUrl + "&fuel_type=" + fuelType + "&city="+ city + "&limit=5";
  //  var urlFuel= gasApiUrl + "&fuel_type=" + "ELEC" + "&city="+ "Oakland" + "&ev_network=all" + "&limit=5";
  var cityZipUrl= smartyUrl + "city=" + city + "&country=us" 
  fetch("https://app.zipcodebase.com/api/v1/code/city?apikey=85c64b60-259a-11ee-ba64-cd4912edca12&city="+city+"&country=us&limit=5")
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
var gasApiUrl = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&access=public&zip="+zips; //added zips parameter to API URL
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
  for (var i = 0; i < gasStations.length; i++){ // itterate through the array of gas stations we are given from results of gasAPI
    var gasStation = gasStations[i]
    var addressEl = document.createElement("li")// create a list element to display list of results
    addressEl.innerText= gasStation.street_address //pulling the street address from the gasStations array
    document.querySelector(".results-container").appendChild(addressEl)//append the address of gas stations!
  }

}




  
  //Append Results to the web page. (appened results-container) (DONE 6/17)
  // Find second API (city api)


// Infor to pull from API - Address of Gas Station 
// Find CSS library not BOOTSTRAP
// JS library called sweet alerts (link)



   
// need to add more to this function this is just a start (TM-07/15)
//This function is taking in the city and fuel type parameters. in this function we will use API to FETCH the gas station data. 



//FUNCTION TO DISPLAY RESULTS




/*Event Listeners Below
_____________________________________________________________*/

formEl.addEventListener("submit", handleUserInput);

})



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


 // ------------------SECOND API------------------
// function getCityInfo(zip){       /// -----Sample for this api was using JQUERY ".ajax" and had to look up how to convert that to vanilla JavaScript. dont fully understand but will read up-TM
//   var cityApiUrl = cityApiLink + zip;
//   var headers = { 'X-Api-Key': cityApiKey };

// return fetch(cityApiUrl, {headers: headers })
// .then(function(response){
//   if(!response.ok){
//     throw new Error('City API reuqest failed');
//   }
//   return response.json();
// })
// .then(function(data){
//   var{latitude, longitude} = data;// what does destructuring mean? RESEARCH
//   return {latitude, longitude};
// })
// .catch(function(error){
//   console.error('Error', error);
//   throw error; // RESEARCH THROW
// });
  
// }

Variables
   Conditionals 
      Loops 
         Functions -
            Objects - Other Objects / Nouns 
               Arrays - Values 
               */
