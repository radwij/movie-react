import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        try {
          setLoading(true);
          setError(null);
          const results = await searchMovies(query);

          setMovies(results);
        } catch(err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchMovies();
  }, [query]);

  if (loading) {
    return <div className="text-center mt-8">Loading Search Result...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">
      Error: {error}
    </div>
  }

  if (!movies) return null

  return (
    <div className="flex flex-col justify-between max-w-7xl px-8 py-5 mx-auto gap-6">
      <div className="flex pb-4 flex-wrap gap-4">
        {movies.map(
          movie =>(
          <Link to={`movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie}/>
          </Link> 
        ))}
      </div>
    </div>
  )
}

export default Search