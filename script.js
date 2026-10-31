console.log("Script is running!")

const bodyMainEl = document.getElementById('body-main')
const movieInput = document.getElementById('movie-search')

const apiKey = "55063d7e"


// API key
// https://www.omdbapi.com/?i=tt3896198&apikey=55063d7e
//
// ex. https://www.omdbapi.com/?t=Inception&apikey=your_api_key

fetch ('https://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey)
    .then (response => response.json())
    .then (data => {
       movieTitle = movieInput.value
       const buildUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`
       console.log(buildUrl)
       return buildUrl
    })
     .catch(error => console.error('Error:', error));
