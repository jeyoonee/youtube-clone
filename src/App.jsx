import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Root from "./pages/Root";
import "./index.css";
import Searched from "./pages/Searched";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "searched", element: <Searched /> },
      { path: "/:videoId", element: <Detail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
