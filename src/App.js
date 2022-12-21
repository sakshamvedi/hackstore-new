import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import Basket from './Component/Basket';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Items from './Component/Items';
import WebDevelopment from './Component/WebDevelopment';
function App() {
  return (
   <>

<BrowserRouter>
      <Routes>
      <Route path="/" element={[<Navbar/>,<Hero/> ,<Items/>]} />
      <Route path="/basket" element={[<Navbar/>,<Basket/>]} />
      <Route path="/webdevelopment" element={[<Navbar/>,<WebDevelopment/>]} />
        </Routes>
        </BrowserRouter>
   </>
    
  );
}

export default App;
