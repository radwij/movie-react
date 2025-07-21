import MovieCardSkeleton from "./MovieCardSkeleton";

function SearchSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="h-10 w-1/2 bg-gray-300 rounded-lg animate-pulse mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[...Array(12)].map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export default SearchSkeleton;
