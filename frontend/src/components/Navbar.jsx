import { Link } from "react-router-dom"
import companyLogo from "../assets/react.svg"

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="flex justify-between max-w-7xl px-8 py-5 mx-auto gap-x-10">
        <div className="nav-left flex gap-x-5 items-center">
          <img src={companyLogo} alt="logo" className="h-8 flex-shrink-0"/>
          <div className="nav-links space-x-4">
            <Link to="/" className="text-base font-semibold text-black">Home</Link>
            <Link to="/discussion" className="text-base font-semibold text-black">Discussion</Link>
          </div>
        </div>
        <form className="flex search-form gap-x-3 whitespace-nowrap flex-grow h-fit">
          <input
            type="text"
            placeholder="Look up something..."
            className="search-input w-full border-2 border-gray-200 px-3 py-2.5 rounded-lg placeholder:text-center focus:outline-0 focus:border-blue-500 focus:border-3"
          />
          <button type="submit" className="py-2.5 px-4 bg-blue-600 rounded-lg">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </form>
        <Link to="" className="text-base font-semibold text-white px-5 py-2.5 bg-blue-600 rounded-lg w-fit whitespace-nowrap">Join Us</Link>
      </div>
    </nav>
  )
}

export default Navbar