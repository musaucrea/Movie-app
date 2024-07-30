document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const movieList = document.getElementById('movie-list');

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim();
        if (query.length > 2) {
            fetchMovies(query);
        }
    });

    function fetchMovies(query) {
        const apiKey = '4561c0b8'; // Replace with your API key
        const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=4561c0b8`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayMovies(data.Search);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }

    function displayMovies(movies) {
        movieList.innerHTML = '';
        if (movies) {
            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.innerHTML = `
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                `;
                movieList.appendChild(movieCard);
            });
        } else {
            movieList.innerHTML = '<p>No movies found.</p>';
        }
    }
});
