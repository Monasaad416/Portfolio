import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


import "@fontsource/playfair-display"
import "@fontsource/playfair-display/400.css"
import "@fontsource/playfair-display/400-italic.css"

import "@fortawesome/fontawesome-free/css/all.min.css";

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
