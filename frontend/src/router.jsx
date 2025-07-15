import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion";
import MovieDetail from "./pages/MovieDetail";


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
        element: <Discussion />
      },
      {
        path: "movie/:movieId",
        element:<MovieDetail />
      }
    ]
  }
])

export default router