import { Outlet } from  "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-full h-fit">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default App
