function Footer() {
  return (
    <div className="w-full border-t border-gray-200">
      <div className="max-w-7xl px-8 py-5 mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">©  2025 FilmLog. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">About</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
        </div>
      </div>
    </div>
  )
}

export default Footer