import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Category from "./pages/Category.tsx";
import Home from "./pages/Home.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="/category/:category" element={<Category/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)