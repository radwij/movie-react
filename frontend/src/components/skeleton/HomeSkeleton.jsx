import MovieCardSkeleton from "./MovieCardSkeleton";

function HomeSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-12">
      {/* Hero Section Skeleton */}
      <div className="w-full h-96 bg-gray-300 rounded-xl animate-pulse"></div>

      {/* Carousel Skeleton */}
      <div className="space-y-4">
        <div className="h-8 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Another Carousel Skeleton */}
      <div className="space-y-4">
        <div className="h-8 w-1/3 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSkeleton;
