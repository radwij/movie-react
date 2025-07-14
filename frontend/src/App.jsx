import { Outlet } from  "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Discussion from "./pages/Discussion"

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
