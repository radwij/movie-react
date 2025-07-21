function MovieDetailSkeleton() {
  return (
    <div className="flex justify-between max-w-7xl px-8 py-5 mx-auto gap-6">
      <div className="flex gap-8 items-start w-full">
        {/* Left Side: Poster Skeleton */}
        <div className="relative h-[600px] aspect-[2/3] bg-gray-300 rounded-xl animate-pulse"></div>

        {/* Right Side: Details Skeleton */}
        <div className="flex flex-col w-full gap-6 flex-grow min-w-0 pt-4">
          <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="h-12 w-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
            {/* Sub-info Skeleton */}
            <div className="h-6 w-1/3 bg-gray-300 rounded-lg animate-pulse"></div>
            {/* Genre Badges Skeleton */}
            <div className="flex w-full gap-2">
              <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Tabs Skeleton */}
          <div className="w-full mt-4">
            <div className="h-8 w-1/2 bg-gray-300 rounded-lg animate-pulse"></div>
            <hr className="border-t-2 border-gray-200 w-full my-3" />
            {/* Overview Skeleton */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailSkeleton;
