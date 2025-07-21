import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion";
import MovieDetail from "./pages/MovieDetail";
import UnderDevelopment from "./pages/UnderDevelopment";
import Search from "./pages/Search";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "discussion",
        element: <UnderDevelopment />
      },
      {
        path: "movie/:movieId",
        element:<MovieDetail />
      },
      {
        path: "search",
        element: <Search />,
      }
    ]
  }
])

export default router