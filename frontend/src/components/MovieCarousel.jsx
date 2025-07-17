import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function MovieCarousel({movies}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide 
      ? movies.length - 1
      : currentIndex - 1
      
    setCurrentIndex(newIndex);
  }

  const handleNext = () => {
    const isLastSlide = currentIndex === movies.length - 1;
    const newIndex = isLastSlide
      ? 0
      : currentIndex + 1

    setCurrentIndex(newIndex);
  }

  useEffect(() => {
    if (movies.length === 0) return;

    const slideInterval = setInterval(handleNext, 4000);

    return () => {
      clearInterval(slideInterval);
    }
  })

  return (
    <div className="relative">
      <div className="carousel-window overflow-hidden h-96 w-full rounded-lg">
        <div className="carousel-strip flex flex-nowrap h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {movies.map(
            movie =>(
            <div className="w-full flex-shrink-0" key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                <div className="group relative flex flex-col flex-shrink-0 h-full w-full overflow-hidden">
                  <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                  <div className="absolute inset-0 p-8 flex flex-col gap-4 items-start bg-gradient-to-r from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[40%]">
                    <p className="text-white text-6xl font-bold flex-wrap">{movie.title}</p>
                    <div className="space-x-3">
                      <button className="text-base font-semibold text-white px-5 py-2 bg-blue-500 rounded-lg w-fit whitespace-nowrap hover:bg-blue-600 transition-colors duration-300">Save</button>
                      <button className="text-base font-semibold text-white px-5 py-2 bg-blue-500 rounded-lg w-fit whitespace-nowrap hover:bg-blue-600 transition-colors duration-300">View Detail</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute flex justify-end w-full bottom-4 right-4 gap-x-3">
        <button className="text-base font-semibold text-white px-2 py-2 bg-black/60 rounded-full w-fit whitespace-nowrap hover:bg-black/90 transition-colors duration-300" onClick={handlePrev}>&#x2190;</button>
        <button className="text-base font-semibold text-white px-2 py-2 bg-black/60 rounded-full w-fit whitespace-nowrap hover:bg-black/90 transition-colors duration-300" onClick={handleNext}>&#x2192;</button>
      </div>
    </div>
  )
}

export default MovieCarousel