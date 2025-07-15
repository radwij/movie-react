import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Home() {
  // setting up state
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // on mount, the component will do this
  useEffect(() => {
    // define the function to run
    const loadMovies = async () => {
      try {
        // setting default state before fetching
        setLoading(true);
        setError(null);

        // fetching the data
        const movieData = await getPopularMovies();
        
        // setting the fetched movies to state
        setMovies(movieData);
      } catch (err) {
        // catching the error thrown from service
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // call the function
    loadMovies();

    // no dependency (default: onMount)
  }, [])

  if (loading) {
    return <div className="text-center mt-8">Loading Movies...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">
      Error: {error}
    </div> 
  }

  return (
    <div className="flex flex-col justify-between max-w-7xl px-8 py-5 mx-auto">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-black font-semibold text-2xl">Popular Movies</h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-nowrap space-x-4">
            {movies.map(
              movie =>(
              <Link to={`movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie}/>
              </Link> 
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home