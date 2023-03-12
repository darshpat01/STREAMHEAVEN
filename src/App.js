import "./App.css";
import Root from "./Pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import VideoWindow from "./Pages/VideoWindow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/video/:id",
        element: <VideoWindow />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
