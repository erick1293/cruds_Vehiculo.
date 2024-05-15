import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Seccion1}from "./Componentes/Seccion1"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Componentes/Header";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BrowserRouter>
    <Header/>
        <Routes> 
          <Route path="/" element={<Seccion1 />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

