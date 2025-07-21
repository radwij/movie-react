import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getMovieCredit, getMovieDetail, getSimilarMovies } from "../services/movieService";
import GenreBadge from "../components/GenreBadge";
import MovieCard from "../components/MovieCard";
import { minutesToHourAndMinutes } from "../utils/time";
import CastCard from "../components/CastCard";
import ProductionCard from "../components/ProductionCard";

import MovieDetailSkeleton from "../components/skeleton/MovieDetailSkeleton";

function MovieDetail() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieCredit, setMovieCredit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadMovieDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const [movieDetail, similarMovies, credit] = await Promise.all([
          getMovieDetail(movieId),
          getSimilarMovies(movieId),
          getMovieCredit(movieId)
        ]);

        setMovie(movieDetail);
        setSimilarMovies(similarMovies);
        setMovieCredit(credit);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovieDetail();
  }, [])

  if (loading) {
    return <MovieDetailSkeleton />;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">
      Error: {error}
    </div> 
  }

  if (!movie) return null
  
  const posterImageURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : `https://placehold.co/500x750.png?text=image-not-found`;

  return (
    <div className="flex flex-col justify-between max-w-7xl px-8 py-5 mx-auto gap-6">
      <div className="flex gap-8 items-start">
        <div className="relative h-[600px] aspect-[2/3]">
          <img className="object-cover h-full w-full rounded-t-xl" src={posterImageURL}/>
          <div className="absolute w-full h-[30%] inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="flex flex-col w-full gap-6 flex-grow min-w-0">
          <div className="space-y-3">
            <h1 className="text-black font-semibold text-5xl h-fit w-full">{movie.title}</h1>
            <div className="flex gap-2 items-center text-gray-500">
              <p>{movie.release_date.split('-')[0]}</p>
              <p>|</p>
              <p>{minutesToHourAndMinutes(movie.runtime)}</p>
            </div>
            <div className="flex overflow-x-auto w-full gap-2 pb-3">
              {movie.genres.map(
                genre => (
                  <GenreBadge genre={genre} key={genre.id} />
                )
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="flex overflow-x-auto gap-4">
              <button onClick={() => setActiveTab('overview')} className={`py-1 whitespace-nowrap text-lg ${activeTab === 'overview'
                ? "text-blue-500 font-bold underline decoration-3 underline-offset-8"
                : "text-gray-500"
              }`}>Overview</button>
              <button onClick={() => setActiveTab('cast')} className={`py-1 whitespace-nowrap text-lg ${activeTab === 'cast'
                ? "text-blue-500 font-bold underline decoration-2 underline-offset-8"
                : "text-gray-500"
              }`}>Cast</button>
              <button onClick={() => setActiveTab('production')} className={`py-1 whitespace-nowrap text-lg ${activeTab === 'production'
                ? "text-blue-500 font-bold underline decoration-2 underline-offset-8"
                : "text-gray-500"
              }`}>Production</button>
            </div>
            <hr className="border-t-2 border-gray-300 w-full mb-3" />
            {activeTab === 'overview' && (
              <div className="flex flex-col gap-2">
                <p className="text-lg text-black font-semibold">"{movie.tagline}"</p>
                <p className="text-black">{movie.overview}</p>
              </div>
            )}
            {activeTab === 'cast' && (
              <div className="overflow-x-auto w-full pb-4">
                <div className="flex flex-nowrap gap-3 h-fit">
                  {movieCredit.cast.map(
                    cast => (
                      <CastCard person={cast} movie={movie} key={cast.cast_id}/>
                    )
                  )}
                </div>
              </div>
            )}
            {activeTab === 'production' && (
              <div className="space-y-4">
                {movie.production_companies.map(
                  company => (
                    <ProductionCard production={company} key={company.id} />
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
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail