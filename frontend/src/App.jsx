import { Outlet } from  "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full h-fit">
      <Navbar />
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
