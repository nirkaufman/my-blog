import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {SignIn} from "./pages/Sign-In";
import {Posts} from "./pages/Posts";
import React from "react";
import {Home} from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'sign-in',
        element: <SignIn/>
      },
      {
        path: 'posts',
        element: <Posts/>
      },
    ]
  },

]);
