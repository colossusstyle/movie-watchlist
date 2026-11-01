console.log("Script is running!")

const bodyMainEl = document.getElementById('body-main')
const movieInput = document.getElementById('movie-search')
const searchButton = document.getElementById('search-button')

const apiKey = "55063d7e"

console.log({ bodyMainEl, movieInput, searchButton });


// API key
// https://www.omdbapi.com/?i=tt3896198&apikey=55063d7e
//
// ex. https://www.omdbapi.com/?t=Inception&apikey=your_api_key


searchButton.addEventListener('click', e => {

    const movieTitle = movieInput.value

    fetch (`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
        .then (response => response.json())
        .then (data => {

        

        bodyMainEl.innerHTML = `
                <div class="movie-return">
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster}" class="movie-poster "alt="${data.Title} Poster">
                </div>
        `
        })
        .catch(error => console.error('Error:', error));

})


