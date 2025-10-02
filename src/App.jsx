// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AreasOfExpertise from "./pages/AreasOfExpertise";
import UndergroundPage from "./pages/UndergroundPage";
import ServiceAndMaintanance from "./pages/ServiceAndMaintanance";
import SmInfraSol from "./pages/SmInfraSol";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/areas-of-expertise" element={<AreasOfExpertise />} />
          <Route path="/underground" element={<UndergroundPage />} />
          <Route path="/service-maintenance" element={<ServiceAndMaintanance />} />
          <Route path="/smart-infrastructure-solutions" element={<SmInfraSol />} />
          {/* You can add other routes here */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
