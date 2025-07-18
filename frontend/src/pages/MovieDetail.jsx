import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getMovieDetail, getSimilarMovies } from "../services/movieService";
import GenreBadge from "../components/GenreBadge";
import MovieCard from "../components/MovieCard";
import { minutesToHourAndMinutes } from "../utils/time";

function MovieDetail() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadMovieDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const [movieDetail, similarMovies] = await Promise.all([
          getMovieDetail(movieId),
          getSimilarMovies(movieId)
        ]);

        setMovie(movieDetail);
        setSimilarMovies(similarMovies);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovieDetail();
  }, [])

  if (loading) {
    return <div className="text-center mt-8">Loading Movie Details...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">
      Error: {error}
    </div> 
  }

  if (!movie) return null
  
  return (
    <div className="flex flex-col justify-between max-w-7xl px-8 py-5 mx-auto gap-6">
      <div className="flex gap-8 items-start">
        <div className="relative h-[600px] aspect-[2/3]">
          <img className="object-cover h-full w-full rounded-t-xl" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
          <div className="absolute w-full h-[30%] inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <div className="space-y-3">
            <h1 className="text-black font-semibold text-5xl h-fit w-full">{movie.title}</h1>
            <div className="flex gap-2 items-center text-gray-500">
              <p>{movie.release_date.split('-')[0]}</p>
              <p>|</p>
              <p>{minutesToHourAndMinutes(movie.runtime)}</p>
            </div>
            <div className="flex overflow-x-auto w-full gap-2">
              {movie.genres.map(
                genre => (
                  <GenreBadge genre={genre} key={genre.id} />
                )
              )}
            </div>
          </div>
          <div className="">
            <div className="flex overflow-x-auto gap-3">
              <button onClick={() => setActiveTab('overview')} className={`py-1 whitespace-nowrap text-lg ${activeTab === 'overview'
                ? "text-blue-500 font-bold underline decoration-3 underline-offset-8"
                : "text-gray-500"
              }`}>Overview</button>
              <button onClick={() => setActiveTab('production')} className={`py-1 whitespace-nowrap text-lg ${activeTab === 'production'
                ? "text-blue-500 font-bold underline decoration-2 underline-offset-8"
                : "text-gray-500"
              }`}>Production</button>
            </div>
            <hr className="border-t-2 border-gray-300 w-full mb-3" />
            {activeTab === 'overview' && (
              <p className="text-black">{movie.overview}</p>
            )}
            {activeTab === 'production' && (
              <div className="space-y-4">
                {movie.production_companies.map(
                  company => (
                    <div className="flex whitespace-nowrap items-center gap-5">
                      <div className="aspect-[1/1] w-12">
                        <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt="logo" />
                      </div>
                      <p>{company.name}</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-black font-semibold text-2xl">Similar Movies</h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex flex-nowrap space-x-4">
            {similarMovies.map(
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

export default MovieDetail