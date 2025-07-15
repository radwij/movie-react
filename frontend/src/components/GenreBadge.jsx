function GenreBadge({genre}) {
  return (
    <div className="px-2.5 py-1 rounded-md border-1 items-center border-gray-500 hover:bg-gray-200 transition-colors duration-300 select-none">
      <p className="text-gray-500 leading-tight">{genre.name}</p>   
    </div>
  )
}

export default GenreBadge