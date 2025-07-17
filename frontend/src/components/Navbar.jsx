import { Link } from "react-router-dom"
import companyLogo from "../assets/react.svg"
import { useEffect, useState } from "react"

function Navbar() {
  const [activePage, setActivePage] = useState('home');

  // useEffect(() => {

  // })

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="flex justify-between max-w-7xl px-8 py-5 mx-auto gap-x-10">
        <div className="nav-left flex gap-x-5 items-center">
          <img src={companyLogo} alt="logo" className="h-8 flex-shrink-0"/>
          <div className="nav-links space-x-4">
            <Link to="/" onClick={() => setActivePage('home')} className={`text-base hover:text-blue-500 transition-colors duration-300 ${activePage === 'home'
              ? "text-blue-500 font-semibold "
              : "text-black"
            }`}>Home</Link>
            <Link to="/discussion" onClick={() => setActivePage('discussion')} className={`text-base hover:text-blue-500 transition-colors duration-300 ${activePage === 'discussion'
              ? "text-blue-500 font-semibold "
              : "text-black"
            }`}>Discussion</Link>
          </div>
        </div>
        <form className="flex search-form gap-x-3 whitespace-nowrap flex-grow h-fit">
          <input
            type="text"
            placeholder="Look up something..."
            className="search-input w-full border-2 border-gray-200 h-10 px-5 py-2 rounded-3xl focus:outline-0 focus:border-blue-500 focus:border-3"
          />
          <button type="submit" className="flex items-center justify-center h-10 px-2 text-base font-semibold text-white bg-blue-500 rounded-lg w-fit whitespace-nowrap hover:bg-blue-600 transition-colors duration-300">
            <span className="material-symbols-outlined text-white">search</span> 
          </button>
        </form>
        <Link to="" className="flex items-center justify-center h-10 px-5 text-base font-semibold text-white bg-blue-500 rounded-lg w-fit whitespace-nowrap hover:bg-blue-600 transition-colors duration-300">Join Us</Link>
      </div>
    </nav>
  )
}

export default Navbar