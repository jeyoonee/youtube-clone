import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Root from "./pages/Root";
import "./index.css";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "search/:keyword", element: <Search /> },
        { path: ":videoId", element: <Detail /> },
      ],
    },
  ],
  {
    basename: "/youtube-clone",
  }
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
