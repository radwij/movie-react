const API_KEY =  import.meta.env.VITE_THEMOVIEDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

export const getMovieDetail = async (movieId) => {
  const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export const getTrendingMovies = async () => {
  const url = `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

export const getSimilarMovies = async (movieId) => {
  const url = `${API_URL}/movie/${movieId}/similar?api_key=${API_KEY}`

  const response = await fetch(url);

  if (!response) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

export const getTopRatedMovies = async () => {
  const url = `${API_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

export const getUpcomingMovies = async () => {
  const url = `${API_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}

export const getMovieCredit = async (movieId) => {
  const url = `${API_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}