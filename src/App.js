import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Seccion1}from "./Componentes/Seccion1"
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Seccion1 />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
