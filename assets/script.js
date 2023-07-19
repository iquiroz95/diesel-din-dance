/* Variables Below
_____________________________________________________________*/
document.addEventListener("DOMContentLoaded", function(){ // this ensures the code executre only after the HTML doc has finished loading. may take down later ..

  var gmapsKey = "&key=AIzaSyAEixeDUTRcNwCXOgNXbeiS2yd-F6g4SZY"; 
  var geocodeLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  var reverseGeoLink = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
  
  var formEl = document.getElementById("search-form");
  var cityInputEl = document.getElementById('search-input');
  var fuelTypeInputEl = document.getElementById("fuel-type");
  var resultsContainer = document.getElementById("results-container");
  
  "85c64b60-259a-11ee-ba64-cd4912edca12"
  var zipCodeUrl= "https://app.zipcodebase.com/api/v1/code/city?apikey=85c64b60-259a-11ee-ba64-cd4912edca12"
  var gasApi = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&access=public"
  


  
  function handleUserInput(event) {
     event.preventDefault();
    var cityInput = cityInputEl.value;
     runZipsApi(cityInput)
     let timerInterval
     Swal.fire({
       title: 'Preparing Fuel!',
       html: 'I will close in <b></b> milliseconds.',
       timer: 1200,
       timerProgressBar: true,
       didOpen: () => {
         Swal.showLoading()
         const b = Swal.getHtmlContainer().querySelector('b')
         timerInterval = setInterval(() => {
           b.textContent = Swal.getTimerLeft()
         }, 100)
       },
       willClose: () => {
         clearInterval(timerInterval)
       }
     }).then((result) => {
       /* Read more about handling dismissals below */
       if (result.dismiss === Swal.DismissReason.timer) {
         console.log('I was closed by the timer')
       }
     })
  }
  
  
  function runZipsApi(city){
    fetch(zipCodeUrl + "&city=" + city + "&country=us&limit=")
    .then(function(response){
      return response.json(); // we are given a return of multiple zip codes and want to turn them into an ARRAY so we can enter them in out gasAPI url.
    })
    .then(function(data){
      console.log(data); 
      var zips = data.results.join(",") //taking our zip codes found in data.results and forming an array with a comma to separate the zip codes to follow gasAPI documentation.
      console.log(zips) //
  
      var fuelTypeInput = fuelTypeInputEl.value; // now run fuelTypeInput.value right before getGasStations is run
      getGasStations(zips,fuelTypeInput)// now running ZIPS (array) Through the getGasStations Functions and gas API
    })
  }
  
  function getGasStations(zips, fuelType){
  var gasApiUrl = gasApi + "&zip=" + zips + "&fuel_type=" + fuelType + "&limit="; //added zips parameter to API URL
    fetch(gasApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      displayResults(data.fuel_stations) //Went through this path to get list of fuel_stations based on zips array
    })
  }
  
  function displayResults(gasStations){
     resultsContainer.innerHTML = "";
    for (var i = 0; i < gasStations.length; i++){ // itterate through the array of gas stations we are given from results of gasAPI
      var gasStation = gasStations[i]
      var addressEl = document.createElement("li")// create a list element to display list of results
      addressEl.innerText= gasStation.street_address + ", " + gasStation.city + ", " + gasStation.state //pulling the street address from the gasStations array
      document.querySelector(".results-container").appendChild(addressEl)//append the address of gas stations!
    }
  }
  /*Event Listeners Below
  _____________________________________________________________*/
  
  formEl.addEventListener("submit", handleUserInput);
  
  })