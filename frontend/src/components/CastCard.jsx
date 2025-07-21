function CastCard({person, movie}) {
  const castImageURL = person.profile_path
    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
    : `https://placehold.co/500x750.png?text=image-not-found`;
  return (
    <div className="flex flex-col items-start flex-shrink-0 rounded-md hover:bg-gray-200 transition-colors duration-300 overflow-hidden w-36 h-64">
      <div className="w-full h-[3/4] rounded-md overflow-hidden">
        <img className="object-cover w-full h-full" src={castImageURL} alt={`${person.name} image`} />
      </div>
      <div className="flex flex-col px-2 py-1">
        <p className="font-semibold [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] text-elipsis overflow-hidden">{person.name}</p>
        <p className="text-sm text-gray-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] text-elipsis overflow-hidden">as {person.character}</p>
      </div>
    </div>
  )
} 

export default CastCard;