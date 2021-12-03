import TMDBKey from "./env.js";

const API_KEY = TMDBKey;


const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY.clef}`,
    fetchTopRated: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&with_genres=35`,
    fetcHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY.clef}&with_genres=99`,
};
export default requests;