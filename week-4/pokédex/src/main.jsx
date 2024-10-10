import "@style/reset.css";
import "@style/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@functional/App/App.jsx";
import Games from "@pages/Games/Games";
import PokeOverview from "@pages/Pokemon/Overview/PokeOverview";
import PokeDetail from "@pages/Pokemon/Detail/PokeDetail";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PokeOverview />,
      },
      {
        path: "/pokemon/:id",
        element: <PokeDetail />,
      },
      {
        path: "/games",
        element: <Games />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
