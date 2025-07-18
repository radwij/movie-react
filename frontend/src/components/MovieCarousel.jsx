import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function MovieCarousel({movies}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handleSaveClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    alert("Save Button clicked");
  }

  useEffect(() => {
    if (movies.length === 0) return;
    const slideInterval = setInterval(handleNext, 4000);
    return () => {
      clearInterval(slideInterval);
    }
  }, [currentIndex, movies.length])

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    },500);
    return () => {
      clearTimeout(timer);
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <div className="carousel-window overflow-hidden h-96 w-full rounded-lg">
        <div className="carousel-strip flex flex-nowrap h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {movies.map(
            (movie, index) => {
              const isVisible = index === currentIndex && !isTransitioning;
              return (
                <div className="w-full flex-shrink-0" key={movie.id}>
                  <Link to={`movie/${movie.id}`}>
                    <div className="group relative flex flex-col flex-shrink-0 h-full w-full overflow-hidden">
                      <img className="object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                      <div className={`absolute inset-0 p-8 flex flex-col gap-3 items-start bg-gradient-to-r from-black/80 to-transparent max-w-[40%] ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                        <p className="text-white text-6xl font-bold overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">{movie.title}</p>
                        <div className="flex gap-2 items-center text-gray-300 pl-1">
                          <p>{movie.release_date.split('-')[0]}</p>
                          <p>|</p>
                          <p>{movie.runtime} minutes</p>
                        </div>
                        <div className="flex whitespace-nowrap space-x-3 mt-2">
                          <button className="flex items-center justify-center h-10 px-5 text-base font-semibold text-white bg-blue-500 rounded-lg w-fit whitespace-nowrap hover:bg-blue-600 transition-colors duration-300">View Detail</button>
                          <button className="flex items-center justify-center h-10 px-5 text-base font-semibold text-white bg-blue-500 rounded-lg w-fit whitespace-nowrap hover:bg-blue-600 transition-colors duration-300 gap-2" onClick={handleSaveClick}><span className="material-symbols-outlined text-white md-18">collections_bookmark</span>Save</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          )}
        </div>
      </div>
      <div className="absolute flex justify-end w-full bottom-4 right-4 gap-x-3">
        <button className="text-base font-semibold text-white px-2 py-2 bg-black/60 rounded-full w-fit whitespace-nowrap hover:bg-black/90 transition-colors duration-300 flex items-center justify-center" onClick={handlePrev}><span className="material-symbols-outlined text-white text">chevron_left</span></button>
        <button className="text-base font-semibold text-white px-2 py-2 bg-black/60 rounded-full w-fit whitespace-nowrap hover:bg-black/90 transition-colors duration-300 flex items-center justify-center" onClick={handleNext}><span className="material-symbols-outlined text-white">chevron_right</span></button>
      </div>
    </div>
  )
}

export default MovieCarousel