import { useEffect, useState } from "react"
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel";

function Home() {
  // setting up state
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // on mount, the component will do this
  useEffect(() => {
    // define the function to run
    const loadAllMovies = async () => {
      try {
        // setting default state before fetching
        setLoading(true);
        setError(null);

        // fetching the data
        const [popular, trending, topRated, upcoming] = await Promise.all([
          getPopularMovies(),
          getTrendingMovies(),
          getTopRatedMovies(),
          getUpcomingMovies()
        ]);
        // const movieData = await getPopularMovies();
        
        // setting the fetched popularMovies to state
        setPopularMovies(popular);
        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
        setUpcomingMovies(upcoming);
      } catch (err) {
        // catching the error thrown from service
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // call the function
    loadAllMovies();

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
    <div className="flex flex-col justify-between max-w-7xl px-8 py-5 mx-auto gap-0">
      <div className="w-full mb-6">
        <MovieCarousel movies={trendingMovies}/>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-black font-semibold text-2xl">Popular Movies</h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-nowrap space-x-4">
            {popularMovies.map(
              movie =>(
              <Link to={`movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie}/>
              </Link> 
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-black font-semibold text-2xl">Top Rated Movies</h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-nowrap space-x-4">
            {topRatedMovies.map(
              movie =>(
              <Link to={`movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie}/>
              </Link> 
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-black font-semibold text-2xl">Upcoming Movies</h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-nowrap space-x-4">
            {upcomingMovies.map(
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