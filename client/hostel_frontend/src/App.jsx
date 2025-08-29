import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentsPage from "./pages/StudentsPage";
import HostelsPage from "./pages/HostelsPage";
import RoomsPage from "./pages/RoomsPage";
import AllocationsPage from "./pages/AllocationsPage";


function App() {

  return (
    <Router>
      <Navbar />
      <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/hostels" element={<HostelsPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/allocations" element={<AllocationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
