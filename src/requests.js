const requests = {
    fetchTrending: `/trending/all/week?api_key=fbc1cb5ca963684208a54a2350a34c81&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=fbc1cb5ca963684208a54a2350a34c81&width_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=fbc1cb5ca963684208a54a2350a34c81&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=fbc1cb5ca963684208a54a2350a34c81&with_genres=28`,
    fetchCommedyMovies: `/discover/movie?api_key=fbc1cb5ca963684208a54a2350a34c81&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=fbc1cb5ca963684208a54a2350a34c81&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=fbc1cb5ca963684208a54a2350a34c81&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=fbc1cb5ca963684208a54a2350a34c81&with_genres=99`,
}

export default requests;