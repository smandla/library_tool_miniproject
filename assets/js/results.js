var objData

var queryString = document.location.search;
var inputVal = queryString.split('=')[1]
var format = queryString.split('=')[2]
console.log(inputVal,format)

var getData = function(searchq,format){
    var requestURL = `https://www.loc.gov/${format}/?fo=json&?q=${searchq}`
        fetch(requestURL)
            .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);
            resultsArr = data.results
            objData()
        })
        }

var objData = function() {
    console.log(resultsArr);
    console.log(resultsArr[0].title)
    console.log(resultsArr[0].date)
    console.log(resultsArr[0].subject)
    console.log(resultsArr[0].description)
}

getData(inputVal, format)