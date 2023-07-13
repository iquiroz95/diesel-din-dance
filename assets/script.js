var nrelKey = "WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y";

fetch("https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=WeUe2S9Wb1CvTZt1wVPAi7J3CvEuzPwpRT0w4N7y&fuel_type=BD,RD&access=public")

.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });