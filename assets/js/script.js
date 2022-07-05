var searchq = ''

// possible formats : maps, audio, photos, manuscripts, newspapers, film/video, music, websites
var format = "manuscripts"

var objData
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

var resultsArr = []
var objData = function() {
    console.log(resultsArr);
    console.log(resultsArr[0].title)
    console.log(resultsArr[0].date)
    console.log(resultsArr[0].subject)
    console.log(resultsArr[0].description)
}

var formEl = document.querySelector("#form")

formEl.addEventListener('submit', function(e){
    e.preventDefault()
    var inputVal = document.querySelector('#search').value 
    console.log(inputVal)
    document.location.replace(`./searchresult.html?val=${inputVal}=${format}`)
})

