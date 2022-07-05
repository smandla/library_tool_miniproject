var searchq = 'Chicago'

// possible formats : maps, audio, photos, manuscripts, newspapers, film/video, music, websites
var format = "photos"

var requestURL = `https://www.loc.gov/${format}/?fo=json&?q=${searchq}`

var objData
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  resultsArr = data.results
  objData()
});

var resultsArr = []
var objData = function() {
    console.log(resultsArr);
    console.log(resultsArr[0].title)
    console.log(resultsArr[0].date)
    console.log(resultsArr[0].subject)
    console.log(resultsArr[0].description)
}

