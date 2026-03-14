import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generos from "./components/Generos/Generos";

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Películas</h1>

        <Routes>
          <Route path="/generos" element={<Generos />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;