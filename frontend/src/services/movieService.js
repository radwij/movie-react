const API_KEY =  import.meta.env.VITE_THEMOVIEDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}`

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}