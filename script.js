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


searchButton.addEventListener('click', async e => {
    try {
        const movieTitle = movieInput.value

    const res = await fetch(`https://www.omdbapi.com/?s=${movieInput.value}&apikey=${apiKey}`)
    const data = await res.json()

        if(data.Response !== "True") {
            bodyMainEl.innerHTML = `<p>${data.Error}</p>`
            return
        } 

        const movies = await Promise.all(
            data.Search.map(movie => 
                fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
                    .then(r => r.json())
            )
        )

       

        const moviesHTML = movies.map(movie => {
            return `
                <div class="returned-movies-div">
                    <div class="movie-return">
                        <h2>${movie.Title} (${movie.Year})</h2>
                        <div class="movie-sub-div">
                            <img src="${movie.Poster}" class="movie-poster" alt="${movie.Title} Poster">
                            <div class="movie-details">
                                <h3>${movie.Actors}</h3>
                                <p>${movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')

        bodyMainEl.innerHTML = moviesHTML

    } catch (error) {
        console.error('Error fetching data:', error)
    }

})

