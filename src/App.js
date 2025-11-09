import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import  AISolutionProvidersPage from "./pages/ServiceSolution";
import  Manufacturing from "./pages/Manufacturing";
import ManufacturingCompaniesPage from "./pages/ManufacturingServices"
import LeadershipProfilePage from "./pages/LeadershipProfile";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leadership" element={<LeadershipProfilePage />} />
          <Route path="/services/Manufacturing" element={<Manufacturing />} />
          <Route path="/services/Technology" element={< ManufacturingCompaniesPage/>} />
          <Route path="/services/AIsolution" element={< AISolutionProvidersPage/>} />
          <Route path="/contactUs" element={< ContactUs/>} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;
