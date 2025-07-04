import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./features/dashboard/Dashboard";
import Students from "./features/students/Students";


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          
          <Route path="*" element={<div className="text-center mt-20 text-red-600 text-xl">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
