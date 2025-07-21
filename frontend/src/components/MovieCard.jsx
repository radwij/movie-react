import { Link } from "react-router-dom"

function MovieCard({movie}) {
  const posterImageURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : `https://placehold.co/500x750.png?text=image-not-found`;
  return(
    <Link to={`/movie/${movie.id}`}>
      <div className="group relative flex-shrink-0 flex flex-col h-48 w-32 rounded-lg overflow-hidden">
        <img className="object-cover w-full h-full" src={posterImageURL}/>
        <div className="absolute inset-0 p-3 flex items-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-base font-bold leading-tight">{movie.title}</p>
        </div>
      </div>   
    </Link>
  )
}

export default MovieCard