import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Discover</Link>
      <Link to="/discussion">Discussion</Link>
    </nav>
  )
}

export default Navbar