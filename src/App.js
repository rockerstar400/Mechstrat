import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import  AISolutionProvidersPage from "./pages/ServiceSolution";
import  Manufacturing from "./pages/Manufacturing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leadership" element={<AISolutionProvidersPage />} />
          <Route path="/services" element={<Manufacturing />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
