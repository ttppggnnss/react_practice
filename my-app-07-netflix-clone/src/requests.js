const API_KEY = "f55b407064cf6541c94ad3890e4cc007";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
  fetchToRated: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

export default requests;
