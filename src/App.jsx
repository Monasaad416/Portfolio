import { useState } from 'react'

import './App.css'

import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Work from "./Components/Work/Work.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

import MasterLayout from './Components/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "experience", element: <Experience /> },
        { path: "work", element: <Work />},
        { path: "skills", element: <Skills /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} ></RouterProvider>
    </>
  );
}

export default App
