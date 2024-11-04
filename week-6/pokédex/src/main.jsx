import "@style/reset.css";
import "@style/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "@functional/App/App.jsx";
import Games from "@pages/Games/Games";
import PokeOverview from "@pages/Pokemon/Overview/PokeOverview";
import PokeDetail from "@pages/Pokemon/Detail/PokeDetail";
import Posts from "@pages/Posts/Posts";
import CreatePost from "@pages/Posts/CreatePost";
import Login from "@pages/Onboarding/Login";
import AuthenticationProvider from "@functional/Auth/AuthenticationProvider";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/pokemon",
        children: [
          {
            path: "",
            element: <PokeOverview />,
          },
          {
            path: ":id",
            element: <PokeDetail />,
          },
        ],
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/posts",
        children: [
          {
            path: "",
            element: <Posts />,
          },
          {
            path: "create",
            element: <CreatePost />,
          },
        ],
      },
      {
        path: "/",
        element: <Navigate to="/pokemon" replace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthenticationProvider>
  </StrictMode>
);
