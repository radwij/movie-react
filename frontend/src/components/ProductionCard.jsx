function ProductionCard({ production }) {
  const logoUrl = production.logo_path
    ? `https://image.tmdb.org/t/p/w200/${production.logo_path}`
    : 'https://placehold.co/200x100/f3f4f6/374151?text=No+Logo';

  return (
    <div className="flex flex-col items-center justify-start text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300 ease-in-out h-full">
      <div className="w-full h-20 flex items-center justify-center mb-4">
        <img
          src={logoUrl}
          alt={`${production.name} logo`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <p className="text-sm font-semibold text-gray-700 leading-tight">{production.name}</p>
    </div>
  );
}

export default ProductionCard;