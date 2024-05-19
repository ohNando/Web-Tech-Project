const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0cfb483c70mshde20c62913a899bp157ed9jsn059760e57612',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};
const indexes = [1, 17, 24, 30, 31, 58, 34, 36];

async function fetchMovies(index) {
    try {
        // fetch işlemini await ile bekleyerek sonucu alıyoruz
        const response = await fetch(url, options);
        const data = await response.json();
        // İndekslere göre film bilgilerini yazdırıyoruz
        const movie = data[index];
        const name = movie.title;
        const poster = movie.image;
        const dToH = `<li class="movie-item"><h2 class="movie-title">${name}</h2><img class="movie-poster" src="${poster}"> <div class="movie-details"></div></li>`;
        document.querySelector('.movies').innerHTML += dToH;
    } catch (error) {
        console.error(error);
    }
}

// Tüm indeksler için fetchMovies fonksiyonunu çağırıyoruz
indexes.forEach(index => fetchMovies(index));
