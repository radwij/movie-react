function GenreBadge({genre}) {
  return (
    <div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300 ease-in-outitems-center select-none">
      <p className="text-gray-700 leading-tight">{genre.name}</p>   
    </div>
  )
}

export default GenreBadge