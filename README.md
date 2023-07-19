# diesel-din-dance
Diesel, dinner and dance using APIs

https://github.com/iquiroz95/diesel-din-dance
https://iquiroz95.github.io/diesel-din-dance/


## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Bulma | [https://bulma.io/documentation/overview/start/](https://bulma.io/documentation/overview/start/)|
| Sweet Alerts| [https://sweetalert2.github.io/](https://sweetalert2.github.io/)

## Description

[Visit the deployed site here!](https://iquiroz95.github.io/diesel-din-dance/)

The goal of this web app is to create a space for a user to search a city they are in to find a gas station that offers the type of fuel their vehicle needs.  Many people use vehicles that may need diesel, an electric charge or another fuel that is not always at you typical gas station.  The user can navigate to this webpage and enter the city they are in and the type of fuel they are looking for. Using a two API that we have found on the internet we are able to retieve specific gas stations that have the tpye of fuel that the user is specified.

Here is a screenshot of our final page:

![Gas-Station-Locator](./) //ADD SCREEN SHOT HERE

## Learning-Points

This project was a great learning experience for my team and myself.  We were challenged with finding two API's that we could work with.  We had initially found an API with tons to information and great content that we all were very excited to use, but, unfortunately when we were testing if it worked for use we got a CORS error.  We had to move forward and luckily the US Federal government has an API that contains gas stations in the United States.  This was a fantastic tool for us to use, however, this API did not have any city parameters to specify the search. It only had a zip code parameter, which is great but it is limiting for the user to get a result based on one zipcode in a city.  To work with this issue our group found a Zip Code API that can take in a city name and return the zip codes in that city. We then used that output from the zip code API the search for gas stations with in that zip code array.  We then itterated from through the gas station results and appended EACH result with thr address, city and state of each gas station result.


A great learning experience from this project was also learning how to turn multiple results (from the Zip Code API) in to an array of zip codes so that we can enter them in the zip code paramters of the gas API.  We had to look up the documents of the Gas api to see how to enter the zip codes and luckily it stated that we can search for multiple zip codes in that api as along as they are separated with a ",". So we made a function that took in the city input from the user. We then .json the return information to make it readable for us, then we get that data returned to us in a nice readable way.  We then created a new variable that will contain the array of zip codes.  we use "data.results.join(",")" and turn the array into a string so that it can be translated into the gas station API URl as a parameter that fulfills the GAS API documentation.

```S

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


```



## Author Information


### Aaron Lam
* [Portfolio](https://alam2tg.github.io/alamtimecapsule/)
* [LinkedIn](https://linkedin.com/in/lam-aaron2/)
* [Github](https://github.com/alam2tg)

### Isai Quiroz


### Thomas Munzar

* [Portfolio](https://thomasmunzar.github.io/portfolio-thomas/)
* [LinkedIn](https://www.linkedin.com/in/thomas-munzar-659b51250/)
* [Github](https://github.com/ThomasMunzar)


## License
MIT License

Copyright (c) [2023] [Aaron Lam, Thomas Munzar, Isai Quiroz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

